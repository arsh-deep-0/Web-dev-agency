function Feature(props) {
    return (
      <div className="w-full tlfeature opacity-20">
        <div className="text-white text-2xl text-center mt-14 encodesans">{props.name}</div>
        {props.component}
        <div className="m-4 rounded-md p-2 ">
          <ul className="text-white flex flex-col serif text-lg feature">
            <li>The only 4 things potential clients want from a web designer and why most people fail to deliver them</li>
            <li>The #1 mistake 95% of web designers make and how to make sure you steer clear of it</li>
            <li>My favorite tactics for changing your self-image and boosting your confidence.</li>
           
          </ul>
        </div>
      </div>
    );
  }
  
  export default Feature;
  