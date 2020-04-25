function createHTMLList(arr) {
    const body = document.querySelector('body');
    const ul = document.createElement('ul');
    body.appendChild(ul);
    arr.forEach(hobby => {
      const li = document.createElement('li');
      li.innerHTML = hobby;
      ul.appendChild (li);
    });
  }
  const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];