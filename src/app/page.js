import Image from "next/image";
import Heropage from "./component/hero/page";
import Cardpage from "./component/card/page";
import Testimonialpage from "./component/testimonial/page";
import HowToWorkpage from "./component/howToWork/page";
import Dealspage from "./component/deals/page";

export default function Homepage() {
  return (
    <div className="-mt-10">
      {/* hero section */};
      <div>
        <Heropage></Heropage>
      </div>
      <div>
        <Cardpage></Cardpage>
      </div>

      <div>
        <Testimonialpage></Testimonialpage>

      </div>
      <div>
          <Dealspage></Dealspage>
      </div>
      <div>
        <HowToWorkpage></HowToWorkpage>
      </div>

    </div>
  );
}
