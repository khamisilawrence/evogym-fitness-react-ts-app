import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types.js";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText.js";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({setSelectedPage}: Props) => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">
              JOIN NOW
            </span>
            TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactUs