      group[user.day] = [user];
    } else {
      group[user.day].push(user);
    }
  }
  return group;
}

function getUser(arr) {
  let users = [];
  for (let i = 0; i < arr.length; i++) {
    if (!users.includes(arr[i].id)) {
       users.push(arr[i].id);
    }
  }
  return users;
}

function getAttendance(m) {
  let users = {};
  let days = months[m];
  let attends = groupDays(getMonth(m));
  let all = getUser(getMonth(m));

  for (let i = 1; i <= days; i++) {
    let _active = 0;
    let days = attends[i];
    let d = new Date("2021-02-" + i);
    let weekday = new Intl.DateTimeFormat("en", { weekday: "short" })
      .format(d)
      .toLowerCase();

    if (days) {
      for (let k = 0; k < days.length; k++) {
        let { id, active } = days[k];
        _active = active;
        if (!users[id]) users[id] = [_active];
        else users[id].push(_active);
      }
    } else {
      all.forEach((id) => {
        if (weekday === "sat" || weekday === "sun") _active = -1;
        if (!    tr += `<td class="missed-col">${count}</td>`;
    tr += "</tr>";
    body += tr;
  }
  return body;
}

function render() {
  let month = 2;
  document.getElementById("thead").innerHTML = constructHeading(month);
  document.getElementById("tbody").innerHTML = constructBody(month);
}
render();
