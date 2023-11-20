function prayApi() {
  fetch(
    "http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2 http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.data.map((item) => {
        console.log(item);
        let melady = document.querySelector(".melady");
        let hijry = document.querySelector(".hijry");
        let day = document.querySelector(".day");
        melady.innerHTML = `${item.date.gregorian.date} الميلادي : `;
        hijry.innerHTML = `${item.date.hijri.date} الهجري: `;
        day.innerHTML = `${item.date.hijri.day} اليوم: `;
      });
    });
}

// let container = document.querySelector(".container");
// let melady = document.querySelector(".melady");
// let higriy = document.querySelector("higriy");
// melady.innerHTML = `
// ${item.date.gregorian.date}
// `;
// higriy.innerHTML = `${item.date.hijri.date}`;
// });
// ` <h1>مواقيت الصلاه</h1>
//         <table>
//           <tr>
//             <td></td>
//             <td>Zuhr</td>
//             <td>Asr</td>
//             <td class="active">Maghrib</td>
//             <td>Isha</td>
//           </tr>
//           <tr>
//             <td>04:40</td>
//             <td>13:30</td>
//             <td>18:30</td>
//             <td class="active">20:30</td>
//             <td>21:30</td>
//           </tr>
//         </table>
//         <a href="#">View Monthly Timetable &rarr;</a>
//       </div><div>
//         <h2>مواقيت الصلاه</h2>
//         <div>${item.date.gregorian.date}</div>
//         <div>${item.date.hijri.date}</div>
//         <div>${item.date.hijri.day}</div>
//         <button></button>
//     </div>`
// callin function
prayApi();
