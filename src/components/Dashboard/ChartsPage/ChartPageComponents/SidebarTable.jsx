import { LuLayoutDashboard } from "react-icons/lu";

const SidebarTable = () => {
  const tableData = [
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
    {
      product: "Nike Shoe",
      item: "415",
      productImg:
        "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      price: "49",
      loss: "-0.5",
    },
  ];
  return (
    <div className="p-5 bg-white rounded-lg text-xs">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-blue-500 bg-blue-100 py-1 px-2 rounded-sm">
          Our Total Sold
        </h3>
        <button className="btn p-1 text-slate-950  rounded-lg bg-slate-300  flex justify-center items-center">
          <LuLayoutDashboard />
        </button>
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="text-xl">Product</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="flex items-center font-semibold mt-5">
                <img
                  className="rounded-full h-5 w-5 mr-2"
                  src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                  alt=""
                />
                <p>
                  <h4>{data.product}</h4>
                  <p>{data.item} item</p>
                </p>
              </td>
              <td className="text-slate-500">{data.loss}%</td>
              <td>${data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SidebarTable;
