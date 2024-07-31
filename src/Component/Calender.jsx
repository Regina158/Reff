import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay, getDay } from 'date-fns';

const holidays = {
  '01/01': 'Tahun Baru',
  '05/01': 'Hari Buruh',
  '08/17': 'Hari Kemerdekaan',
  '12/25': 'Natal',
  // Tambahkan hari libur nasional lainnya di sini
};

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  const generateCalendar = (year) => {
    const months = Array.from({ length: 12 }, (_, i) => i);
    const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

    return months.map((month) => {
      const startMonth = startOfMonth(new Date(year, month));
      const endMonth = endOfMonth(startMonth);
      const startDate = startOfWeek(startMonth);
      const endDate = endOfWeek(endMonth);

      const days = [];
      let day = startDate;

      while (day <= endDate) {
        days.push(day);
        day = addDays(day, 1);
      }

      return (
        <div key={month} className="mb-8 border rounded-lg p-4 shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
          <div className="text-lg font-bold text-center mb-4 text-blue-400">
            {format(new Date(year, month), 'MMMM yyyy')}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-gray-500 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="w-10 h-10 flex items-center justify-center font-semibold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => {
              const isHoliday = holidays[format(day, 'MM/dd')];
              const isSunday = getDay(day) === 0;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedDate(day)}
                  className={`w-10 h-10 flex items-center justify-center border cursor-pointer rounded-lg ${
                    !isSameMonth(day, startMonth)
                      ? 'bg-gray-100 text-gray-400'
                      : isSameDay(day, selectedDate)
                      ? 'bg-blue-300 text-white'
                      : isSameDay(day, today)
                      ? 'bg-green-500 text-white font-bold'
                      : 'bg-white text-black'
                  } transition duration-150 ease-in-out transform hover:scale-105`}
                >
                  <span className={isSunday || isHoliday ? 'text-red-500' : ''}>{format(day, 'd')}</span>
                  {isHoliday && (
                    <div className="text-red-500 text-xs">*</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-inner">
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => setCurrentYear(currentYear - 1)} className="p-2 rounded bg-blue-200 hover:bg-blue-300 transition">
          &lt; {currentYear - 1}
        </button>
        <div className="text-xl font-bold text-blue-500">
          {currentYear}
        </div>
        <button onClick={() => setCurrentYear(currentYear + 1)} className="p-2 rounded bg-blue-200 hover:bg-blue-300 transition">
          {currentYear + 1} &gt;
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {generateCalendar(currentYear)}
      </div>
      <div className="mt-6">
        <div className="font-bold mb-2 text-blue-700">Keterangan:</div>
        {selectedDate && (
          <div className="text-blue-600">
            {format(selectedDate, 'dd/MM/yyyy')} {holidays[format(selectedDate, 'MM/dd')] || 'Tidak ada keterangan'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;