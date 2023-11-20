function prayApi() {
  fetch(
    "https://api.aladhan.com/v1/calendar/2023/4?latitude=51.508515&longitude=-0.1254872&method=2 http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.data.map((item) => {
        console.log(item);
        let time1 = document.querySelector(".time1");
        let time2 = document.querySelector(".time2");
        let time3 = document.querySelector(".time3");
        let time4 = document.querySelector(".time4");
        let time5 = document.querySelector(".time5");
        let melady = document.querySelector(".melady");
        let hijry = document.querySelector(".hijry");
        let day = document.querySelector(".day");
        melady.innerHTML = `${item.date.gregorian.date} الميلادي : `;
        hijry.innerHTML = `${item.date.hijri.date} الهجري: `;
        day.innerHTML = `${item.date.hijri.day} اليوم: `;
        time1.innerHTML = `${item.timings.Fajr}`;
        time2.innerHTML = `${item.timings.Dhuhr}`;
        time3.innerHTML = `${item.timings.Asr}`;
        time4.innerHTML = `${item.timings.Maghrib}`;
        time5.innerHTML = `${item.timings.Isha}`;
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
