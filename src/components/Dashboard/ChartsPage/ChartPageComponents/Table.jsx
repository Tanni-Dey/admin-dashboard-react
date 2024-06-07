import { LuLayoutDashboard } from "react-icons/lu";

const Table = () => {
  const tableData = [
    {
      user: "Emran Ahmed",
      year: "2022",
      date: "16 Aug",
      product: "Clothes",
      userImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png",
      status: "success",
    },
    {
      user: "Emran Ahmed",
      year: "2022",
      date: "16 Aug",
      product: "Clothes",
      userImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png",
      status: "success",
    },
    {
      user: "Emran Ahmed",
      year: "2022",
      date: "16 Aug",
      product: "Clothes",
      userImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png",
      status: "success",
    },
    {
      user: "Emran Ahmed",
      year: "2022",
      date: "16 Aug",
      product: "Clothes",
      userImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png",
      status: "success",
    },
    {
      user: "Emran Ahmed",
      year: "2022",
      date: "16 Aug",
      product: "Clothes",
      userImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/800px-Flag_of_Georgia.svg.png",
      status: "success",
    },
  ];
  return (
    <div className="p-5 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-blue-500 bg-blue-100 py-1 px-2 rounded-sm">
          Our Total Sold
        </h3>
        <button className="btn p-3 text-slate-950  rounded-lg bg-slate-300  flex justify-center items-center">
          <LuLayoutDashboard />
        </button>
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="text-2xl">Best Seller</th>
            <th>Date</th>
            <th>Product</th>
            <th>Country</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((tableRow, index) => (
            <tr key={index}>
              <td className="flex items-center font-semibold mt-5">
                <img
                  className="rounded-full h-10 w-10 mr-2"
                  src={tableRow.userImg}
                  alt=""
                />
                <p>
                  <h4>{tableRow.user}</h4>
                  <p>{tableRow.year}</p>
                </p>
              </td>
              <td>{tableRow.date}</td>
              <td>{tableRow.product}</td>
              <td>
                <img
                  className="h-5 w-7 rounded-none"
                  src={tableRow.flag}
                  alt="flag"
                />
              </td>
              <td>$1000</td>
              <td>{tableRow.status}</td>
              <td>
                <button className="px-3 py-1 rounded-lg bg-slate-300">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
