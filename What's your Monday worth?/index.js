function dayWorth(tasks, hourlyRate){
    const durationTimeList = tasks.map(task => {
        return task.duration;
    });

  const TotalWage = durationTimeList.reduce((sum , duration) => {
    return sum + (duration/60 * hourlyRate);
       
    },0);
    return '\u20AC' + TotalWage.toFixed(2);
}
const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30,
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
  ];