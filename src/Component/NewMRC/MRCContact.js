import React from "react";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import NewNavBar from "../NewNavBar/NewNavBar";
import Wall from "../Wall/Wall";
import "./MRCContact.scss";

import MrcContactImg from "../../images/new-images/MrcContactImg.png";
import Subscribe from "../Subscribe/Subscribe";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { postContactRequest } from "../../utils/csm-api-calls";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { FormError } from "../NewEvents/FormComponents";
import { yupResolver } from "@hookform/resolvers/yup";

const MRCContact = () => {
  const schema = yup.object({
    name: yup.string().required(),
    phone_no: yup.string().required("phone number is a required field"),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone_no: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isLoading } = useMutation(postContactRequest, {
    onMutate: () => {
      toast.info("submitting contact message");
    },
    onSuccess: () => {
      toast.success("contact message submitted");
    },
    onError: () => {
      toast.error("failed to submit contact message");
    },
  });

  const onSubmitHandler = (data) => {
    mutate(data);
  };

  return (
    <div className="mrc-contact">
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <Loader loading={isLoading} />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.367310454374!2d3.3413191932367914!3d6.6011929240879645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228ce24bd1d%3A0x5388ca4742e701eb!2sMAN%20House%2C%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1680258368303!5m2!1sen!2sng"
          width="100%"
          title="title1"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="contact-us">
          <div className="left">
            <h1 className="header">
              <span>Contact </span> Us
            </h1>

            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="half-input">
                <label>
                  <FormError>{errors?.name?.message}</FormError>
                  Your Name
                  <input type={"text"} {...register("name")} />
                </label>
                <label>
                  <FormError>{errors?.phone_no?.message}</FormError>
                  Your Phone Number
                  <input type={"text"} {...register("phone_no")} />
                </label>
              </div>
              <label>
                <FormError>{errors?.email?.message}</FormError>
                Your Email Address
                <input type={"text"} {...register("email")} />
              </label>
              <label>
                <FormError>{errors?.subject?.message}</FormError>
                Subject
                <input type={"text"} {...register("subject")} />
              </label>
              <label>
                <FormError>{errors?.message?.message}</FormError>
                Message
                <textarea {...register("message")} />
              </label>

              <button>Send Message</button>
            </form>
          </div>
          <div className="right">
            <div className="objectives">
              <h1 className="header">
                Get in <span>Touch</span>
              </h1>

              <p>
                We would love to hear from you! Kindly send us a message or an
                enquiry and we will get in touch with you as soon as possible.
              </p>
            </div>

            <div className="objectives">
              <h1 className="header">
                National <span>Secretariat</span>
              </h1>

              <div className="obj-item">
                <div></div>
                <span>
                  Address:77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
                </span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Phone :01-4542700, 01-4542701</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Email: info@manufacturersnigeria.org</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-bold">
                  <Link
                    to={"/operate"}
                    style={{ textDecoration: "none", color: "#2b3513" }}
                  >
                    View Our Branches
                  </Link>
                </span>
              </div>
            </div>

            <div className="objectives">
              <h1 className="header">
                MAN <span>Resource Center</span>
              </h1>

              <div className="obj-item">
                <div></div>
                <span>
                  Address:77, Obafemi Awolowo Way, Ikeja, Lagos State, Nigeria.
                </span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>
                  Phone: 081 666 75412, 01-4542700, 01-4542701, 01-4542702
                </span>
              </div>
              <div className="obj-item">
                <div></div>
                <span>Email: mrc@manufacturersnigeria.org</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-bold">
                  MAN House, 1st Floor, Left Wing.
                </span>
              </div>
            </div>

            <div className="image-banner">
              <div>
                <img alt="" src={MrcContactImg} />
              </div>
              <div>
                <img alt="" src={MrcContactImg} />
              </div>
              <div>
                <img alt="" src={MrcContactImg} />
              </div>
            </div>

            <div className="objectives no-btm-bd">
              <h1 className="header">
                Business <span>Hours</span>
              </h1>

              <div className="obj-item">
                <div></div>
                <span className="span-light">Monday - Friday - 8am to 5pm</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-light">Saturday - Closed</span>
              </div>
              <div className="obj-item">
                <div></div>
                <span className="span-light">Sunday - Closed</span>
              </div>
            </div>
          </div>
        </div>
        <Wall />
        <Footer />
      </UIProvider>
    </div>
  );
};

export default MRCContact;
