import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Total Transformation",
    description:
      "8 session comprehensive program that incorporates exercise, nutrition, and lifestyle changes.",
    image: image1,
  },
  {
    name: "Beginners Bootcamp",
    description:
    "4 Session introductory program to help familiarise you with fitness and nutrition designed for beginners.",
    image: image2,
  },
  {
    name: "Pay Per Session",
    description:
      "This program offers the utmost flexibility for those just starting or returning to their fitness journey.",
    image: image3,
  },
  {
    name: "Friend Discount",
    description:
      "Bring a friend along and their session is half price",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
<section id="ourclasses" className="w-full bg-primary-100 py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>POPULAR PROGRAMS</HText>
            <p className="py-5">
            Your Path to a Healthier, Stronger, and More Balanced Life
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
