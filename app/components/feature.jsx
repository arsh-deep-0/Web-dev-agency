function Feature(props) {
    return (
      <div className="w-full tlfeature opacity-20">
        <div className="text-white text-2xl text-center mt-14 encodesans">{props.name}</div>
        {props.component}
        <div className="greybg m-4 rounded-md p-2 border border-white border-1">
          <ul className="text-white flex flex-col crimson text-base">
            <li>Helps Streamline the Customer Journey.</li>
            <li>Sorting and Ranking Your Leads.</li>
            <li>Precise Forecasting of Sales.</li>
            <li>Improved Customer Targeting.</li>
            <li>Increased Conversion Rates.</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Feature;
  