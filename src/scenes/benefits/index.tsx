import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import IndependenceIcon from "@/assets/IndependenceIcon.png";
import HealthcareIcon from "@/assets/healthcare.png";
import TargetIcon from "@/assets/target.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <img src={IndependenceIcon} alt="Independence Icon" className="h-8 w-8" />,
    title: "Achieve Fitness Independence",
    description:
      "Our mission is to equip you with the knowledge and skills you need to become your own trainer. We view our success not in client dependency, but in your self-sufficiency..",
  },
  {
    icon: <img src={HealthcareIcon} alt="Healthcare Icon" className="h-8 w-8" />,
    title: "Holistic Health Transformation:",
    description:
      "We firmly believe that health is the foundation of a fulfilling life. By enhancing your health with us, you'll notice improvements not only in your physical strength and stamina, but also in your mood, energy, and overall wellbeing.",
  },
  {
    icon: <img src={TargetIcon} alt="Target Icon" className="h-8 w-8" />,
    title: "Simplicity:",
    description:
      "Our fitness programs may push you out of your comfort zone, but our framework remains simple and straightforward. No fads, no gimmicks, just effective exercises and sustainable habits",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 mt-10">  
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>OUR CORE PRINCIPLES.</HText>
          <p className="my-5 text-sm">
            "There is no aspect of your life that will not improve when you better your health"
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto w-1/2 md:w-1/3 lg:w-1/4"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MY{" "}
                    <span className="secondary-400">QUALIFICATIONS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                CIMSPA Level 3 Diploma in Personal Training 
              </p>
              <p className="mb-5">
                Holding a CIMSPA Level 3 Personal Training Certificate is a clear indicator of professional competence. It means the trainer has been trained to a high standard and adheres to a recognised code of ethical practice. For clients, it provides assurance that they are in the hands of a knowledgeable and capable personal trainer committed to delivering safe and effective fitness training.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
