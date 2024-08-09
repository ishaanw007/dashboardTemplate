import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import useShiftStore from '@/store/shift';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TimePicker from 'react-time-picker'; // Import TimePicker
import 'react-time-picker/dist/TimePicker.css';
import '../../app/dashboard/(dashboard)/globals.css'; // Your custom styles
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from '../ui/label';
import { Info } from 'lucide-react';
import { useToast } from '../ui/use-toast';
const toleranceZodSchema = z.object({
  allowedTime: z.string().default('00:00'), // Validates as a string, defaults to '00:00'
  timesAllowed: z.number().default(0), // Validates as a number, defaults to 0
  gracePeriod: z.string().default('00:00') // Validates as a string, defaults to '00:00'
});

const formSchema = z.object({
  shiftName: z.string().min(2, "Shift Name must be at least 2 characters"),
  shiftCode: z.string().optional(),
  startTime: z.string().min(5, "Start Time must be provided"),
  endTime: z.string().min(5, "End Time must be provided"),
  breakEndTime: z.string().optional(),
  breakStartTime: z.string().optional(),
  enableShiftTolerance: z.boolean().optional(),
  weekendDefinitions: z.array(z.object({
    week: z.enum(['All', '1st', '2nd', '3rd', '4th', '5th']),
    days: z.array(z.object({
      day: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
      dayType: z.enum(['Full Day', '1st Half', '2nd Half'])
    }))
  })),
  isAllowedSwipeBeforeStart: z.string(),
  isAllowedSwipeAfterEnd: z.string(),
  markOutMandatory: z.boolean(),
  fixedBreakAllowance: z.boolean(),
  breakDuration: z.string(),
  mandatoryFullDayTime: z.string(),
  mandatoryHalfDayTime: z.string(),
  lateComing: toleranceZodSchema, // Use the defined Zod schema for tolerance
  earlyGoing: toleranceZodSchema  // Use the defined Zod schema for tolerance
});

export function Create() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weeks = ['All', '1st', '2nd', '3rd', '4th', '5th'];
  const { toast } = useToast()
  const { createShift } = useShiftStore();
  const [open, setOpen] = useState(false);
  const [handlemenu, setHandlemenu] = useState('Segment');
  const [applicableFor, setApplicableFor] = useState<any>([])
  const [weekendDefinitions, setWeekendDefinitions] = useState<any>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shiftName: '',
      shiftCode: '',
      startTime: '',
      breakStartTime: '',
      endTime: '',
      breakEndTime: '',
      enableShiftTolerance: false,
      weekendDefinitions: [],
      isAllowedSwipeBeforeStart: '00:00',
      isAllowedSwipeAfterEnd: '00:00',
      markOutMandatory: false,
      fixedBreakAllowance: false,
      breakDuration: '00:00',
      mandatoryFullDayTime: '08:00',
      mandatoryHalfDayTime: '04:00',
      lateComing: { allowedTime: '00:00', timesAllowed: 0, gracePeriod: '00:00' },
      earlyGoing: { allowedTime: '00:00', timesAllowed: 0, gracePeriod: '00:00' },
    },
  });
  const enableShiftTolerance = form.watch("enableShiftTolerance");
  const fixedBreakAllowance = form.watch("fixedBreakAllowance");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = { ...values, weekendDefinitions, applicableFor };
      console.log(formData);
      const response = await createShift(formData);
      form.reset()
      setOpen(false)
      if (response?.status) {
        toast({
          title: "Success",
          description: "Shift created successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong"
        });
      }

      // console.log(response)

    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Something went wrong"
      });
      // Handle error
    }

  }
  const [isMediumDevice, setIsMediumDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumDevice(window.innerWidth >= 768); // Tailwind's md breakpoint is 768px
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}  >
      <SheetTrigger asChild>
        <Button variant="destructive" className="my-3 w-full md:w-[8rem] " data-tour="add-shift">Add Shift</Button>
      </SheetTrigger>
      <SheetContent className='min-w-3/4 overflow-scroll lg:min-w-[60rem] h-full' side={!isMediumDevice ? 'bottom' : 'right'}>
        <SheetHeader className='my-3'>
          <SheetTitle>Create Shift</SheetTitle>
          <SheetDescription>Enter shift details</SheetDescription>
        </SheetHeader>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="shiftName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block">Shift Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shiftCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block">Shift Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='grid grid-cols-3 gap-3'>
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Start Time (24 Hour)</FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} className="myCustomTimePicker react-time-picker__wrapper" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">End Time (24 Hour)</FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} className="myCustomTimePicker react-time-picker__wrapper border-1 border-solid border-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="enableShiftTolerance"
              render={({ field }) => (
                <FormItem className='flex gap-5'>
                  <FormLabel className=" self-end ">Enable Shift Tolerance</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {enableShiftTolerance ? <div className='grid grid-cols-3 gap-3'>
              <FormField
                control={form.control}
                name="lateComing.allowedTime"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Late Coming Allowed Time In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Hours after which late marking will occur </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>

                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} format='HH:mm' className="myCustomTimePicker react-time-picker__wrapper w-10" />

                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lateComing.gracePeriod"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Late Coming Grace Period In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Hours within which an employee is marked on time </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} format='HH:mm' className="myCustomTimePicker react-time-picker__wrapper w-10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lateComing.timesAllowed"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Late Coming Times Allowed
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Number of times the tolerance is allowed </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => {
                        const value = parseInt(e.target.value, 10)
                        field.onChange(value);
                      }} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="earlyGoing.allowedTime"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Early Going Allowed Time In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Hours before which early marking will occur </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} format='HH:mm' disableClock={true} className="myCustomTimePicker react-time-picker__wrapper" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="earlyGoing.gracePeriod"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Early Going Grace Period In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Hours within which an employee is marked on time </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} format='HH:mm' disableClock={true} className="myCustomTimePicker react-time-picker__wrapper" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="earlyGoing.timesAllowed"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Early Going Times Allowed
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Number of times the tolerance is allowed </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input type="number" {...field} onChange={e => {
                        const value = parseInt(e.target.value, 10)
                        field.onChange(value);
                      }} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div> : ""}

            <div className='mt-5'>
              <Label >Weekends Defination</Label>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Days</TableHead>
                      {weeks.map(week => (
                        <TableHead key={week}>{week}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {days.map(day => (
                      <TableRow key={day}>
                        <TableCell>{day}</TableCell>
                        {weeks.map(week => {
                          const key = `${day}-${week}`;
                          const isChecked = weekendDefinitions.some((wd: { week: string; days: any[]; }) => wd.week === week && wd.days.some((d: { day: string; }) => d.day === day));
                          const dayType = isChecked ? weekendDefinitions.find((wd: { week: string; }) => wd.week === week).days.find((d: { day: string; }) => d.day === day).dayType : '';

                          return (
                            <TableCell key={week}>
                              <div className='flex gap-2'>
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={(checked) => {
                                    setWeekendDefinitions((prev: any[]) => {
                                      let updated = [...prev];
                                      if (week === 'All') {
                                        // Clear other weeks for this day if 'All' is selected
                                        updated = updated.map(wd =>
                                          wd.week === 'All' && wd.days.some((d: { day: string; }) => d.day === day)
                                            ? { ...wd, days: wd.days.filter((d: { day: string; }) => d.day !== day) }
                                            : wd
                                        ).filter(wd => !(wd.week !== 'All' && wd.days.some((d: { day: string; }) => d.day === day)));
                                      } else {
                                        // Clear 'All' for this day if any specific week is selected
                                        updated = updated.map(wd =>
                                          wd.week === 'All' && wd.days.some((d: { day: string; }) => d.day === day)
                                            ? { ...wd, days: wd.days.filter((d: { day: string; }) => d.day !== day) }
                                            : wd
                                        );
                                      }
                                      const weekIndex = updated.findIndex(wd => wd.week === week);
                                      if (checked) {
                                        if (weekIndex > -1) {
                                          if (!updated[weekIndex].days.some((d: { day: string; }) => d.day === day)) {
                                            updated[weekIndex].days.push({ day, dayType: 'Full Day' });
                                          }
                                        } else {
                                          updated.push({ week, days: [{ day, dayType: 'Full Day' }] });
                                        }
                                      } else {
                                        if (weekIndex > -1) {
                                          updated[weekIndex].days = updated[weekIndex].days.filter((d: { day: string; }) => d.day !== day);
                                        }
                                      }
                                      return updated.filter((wd: { days: string | any[]; }) => wd.days.length > 0);
                                    });
                                  }}
                                />
                                <Select
                                  value={dayType}
                                  onValueChange={(value) => {
                                    setWeekendDefinitions((prev: any[]) => prev.map((wd: { week: string; days: any[]; }) => wd.week === week ? {
                                      ...wd,
                                      days: wd.days.map((d: { day: string; }) => d.day === day ? { ...d, dayType: value } : d)
                                    } : wd));
                                  }}
                                >
                                  <SelectTrigger className="w-[100px]">
                                    <SelectValue placeholder="Full Day" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Full Day">Full Day</SelectItem>
                                    <SelectItem value="1st Half">1st Half</SelectItem>
                                    <SelectItem value="2nd Half">2nd Half</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-3'>
              <FormField
                control={form.control}
                name="isAllowedSwipeBeforeStart"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Allowed Swipe Before Start In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Hours before shift start when check-in is allowed </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} format='HH:mm' disableClock={true} className="myCustomTimePicker react-time-picker__wrapper" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isAllowedSwipeAfterEnd"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Allowed Swipe After End In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Hours after shift end when check-out is allowed </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} format='HH:mm' className="myCustomTimePicker react-time-picker__wrapper" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="fixedBreakAllowance"
              render={({ field }) => (
                <FormItem className='flex gap-5'>
                  <FormLabel className=" self-end ">Fixed Break Allowance</FormLabel>
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {fixedBreakAllowance ?
              <div className='grid grid-cols-3 gap-3'>
                <FormField
                  control={form.control}
                  name="breakStartTime"
                  render={({ field }) => (
                    <FormItem className='col-span-3 md:col-span-1'>
                      <FormLabel className="block">Break Start Time (24 Hour)</FormLabel>
                      <FormControl>
                        <TimePicker {...field} disableClock={true} className="myCustomTimePicker react-time-picker__wrapper" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="breakEndTime"
                  render={({ field }) => (
                    <FormItem className='col-span-3 md:col-span-1'>
                      <FormLabel className="block">Break End Time (24 Hour)</FormLabel>
                      <FormControl>
                        <TimePicker {...field} disableClock={true} className="myCustomTimePicker react-time-picker__wrapper border-1 border-solid border-gray-300" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              : ""}
            <FormField
              control={form.control}
              name="breakDuration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block">Break Duration In Hours
                    <span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                          <TooltipContent>
                            <p>Duration of the Break </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </FormLabel>
                  <FormControl>
                    <TimePicker {...field} disableClock={true} format='HH:mm' className="myCustomTimePicker react-time-picker__wrapper border-1 border-solid border-gray-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='grid grid-cols-3'>

              <FormField
                control={form.control}
                name="mandatoryFullDayTime"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Mandatory Full Day Time In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Minimum hours required for a full day </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} format='HH:mm' className="myCustomTimePicker react-time-picker__wrapper border-1 border-solid border-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mandatoryHalfDayTime"
                render={({ field }) => (
                  <FormItem className='col-span-3 md:col-span-1'>
                    <FormLabel className="block">Mandatory Half Day Time In Hours
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>  <Info className='h-3'></Info></TooltipTrigger>
                            <TooltipContent>
                              <p>Minimum hours required for a half day </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </FormLabel>
                    <FormControl>
                      <TimePicker {...field} disableClock={true} format='HH:mm' className="myCustomTimePicker react-time-picker__wrapper border-1 border-solid border-gray-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* <div className='space-y-3'>
              <Label> Applicable For</Label>
              <div className='grid grid-cols-4 border border-1'>
                <Command className="rounded-lg border shadow-md col-span-1 border-none">
                  <CommandList>
                    <CommandGroup>
                      <CommandItem onSelect={() => setHandlemenu('Segment')}>
                        <span>Segment</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Region')}>
                        <span>Region</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Location')}>
                        <span>Location</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Work-Location')}>
                        <span>Work-Location</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Business')}>
                        <span>Business</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Sub-Business')}>
                        <span>Sub-Business</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Department')}>
                        <span>Department</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Sub-Department')}>
                        <span>Sub-Department</span>
                      </CommandItem>
                      <CommandItem onSelect={() => setHandlemenu('Employee')}>
                        <span>Employee</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                  </CommandList>
                </Command>

                <div className='col-span-3'>
                  {handlemenu === 'Segment' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Segments</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Segment' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(segments, searchInput)?.map((segment: any) => (
                              <React.Fragment key={segment?._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === segment._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'Segment', id: segment._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== segment._id));
                                      }
                                    }}
                                  /> {segment.segmentName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}

                  {handlemenu === 'Region' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Region</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Region' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(regions, searchInput)?.map((region: any) => (
                              <React.Fragment key={region._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === region._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'Region', id: region._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== region._id));
                                      }
                                    }}
                                  />  {region.regionName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}
                  {handlemenu === 'Location' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Location</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Location' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(locations, searchInput)?.map((location: any) => (
                              <React.Fragment key={location._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === location._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'Location', id: location._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== location._id));
                                      }
                                    }}
                                  /> {location.locationName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}

                  {handlemenu === 'Work-Location' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Work-Location</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Work-Location' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(workLocations, searchInput)?.map((workLocation: any) => (
                              <React.Fragment key={workLocation._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === workLocation._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'WorkLocation', id: workLocation._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== workLocation._id));
                                      }
                                    }}
                                  />  {workLocation.workLocationName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}


                  {handlemenu === 'Business' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Business</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Business' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(businesses, searchInput)?.map((business: any) => (
                              <React.Fragment key={business._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === business._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'Business', id: business._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== business._id));
                                      }
                                    }}
                                  ></Checkbox> {business.businessName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}





                  {handlemenu === 'Sub-Business' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Sub-Business</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Sub-Business' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(subBusinesses, searchInput)?.map((subBusiness: any) => (
                              <React.Fragment key={subBusiness._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === subBusiness._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'SubBusiness', id: subBusiness._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== subBusiness._id));
                                      }
                                    }}
                                  ></Checkbox> {subBusiness.subBusinessName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}
                  {handlemenu === 'Department' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Department</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Department' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(departments, searchInput)?.map((department: any) => (
                              <React.Fragment key={department._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === department._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'Department', id: department._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== department._id));
                                      }
                                    }}
                                  /> {department.name}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}

                  {handlemenu === 'Sub-Department' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Sub-Department</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Sub-Department' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(subDepartments, searchInput)?.map((subDepartment: any) => (
                              <React.Fragment key={subDepartment._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === subDepartment._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'SubDepartment', id: subDepartment._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== subDepartment._id));
                                      }
                                    }}
                                  /> {subDepartment.subDepartmentName}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}

                  {handlemenu === 'Employee' ?
                    <div className='text-center my-3 col-span-3 '>
                      <h1 className='col-span-3 font-semibold'>Select Employee</h1>
                      <div className=''>
                        <ScrollArea className="h-60 w-full rounded-md ">
                          <Input placeholder='Search Employee' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}></Input>
                          <div className="p-4">
                            {filterItems(employees, searchInput)?.map((employee: any) => (
                              <React.Fragment key={employee._id}>
                                <div className="text-sm text-start gap-2">
                                  <Checkbox
                                    checked={applicableFor.some((item: any) => item.id === employee._id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setApplicableFor([...applicableFor, { type: 'Employee', id: employee._id }]);
                                      } else {
                                        setApplicableFor(applicableFor.filter((item: any) => item.id !== employee._id));
                                      }
                                    }}
                                  /> {employee.email}
                                </div>
                                <Separator className="my-2" />
                              </React.Fragment>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    </div> : ""}
                </div>
              </div>
            </div> */}

            <SheetFooter>
              <Button type="submit">Submit</Button>
            </SheetFooter>
            <SheetClose></SheetClose>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
