import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import "./apply.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

const Apply: React.FC = () => {
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const { t, i18n } = useTranslation("home");

  const [formData, setFormData] = useState({
    "entry.1926189810": "",
    "entry.274219221": "",
    "entry.1785974725": "",
    "entry.1996221300": "",
    "entry.2145100513": "",
    "entry.1342289073": "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isAllRequiredInputsFilled = () => {
    // Check if all required input fields have values
    return (
      formData["entry.1926189810"].trim() !== "" &&
      formData["entry.274219221"].trim() !== "" &&
      formData["entry.1785974725"].trim() !== "" &&
      formData["entry.1996221300"].trim() !== "" &&
      formData["entry.2145100513"].trim() !== ""
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if both checkboxes are checked
    const is18Checked = (
      document.getElementById("apply_18") as HTMLInputElement
    )?.checked;
    const isAgreeChecked = (
      document.getElementById("apply_agree") as HTMLInputElement
    )?.checked;

    if (is18Checked && isAgreeChecked) {
      setIsFormCompleted(true); // Set the form completion state to true
      const googleFormsURL =
        "https://docs.google.com/forms/d/e/1FAIpQLSenrj9CGQGfsPZ4gvKyRLPVtS1jbeuTG0myxtxWvdz-Txfw3Q/formResponse";

      const formDataEntries = Object.entries(formData);
      const formDataSerialized = formDataEntries
        .map(
          ([fieldName, value]) =>
            `${encodeURIComponent(fieldName)}=${encodeURIComponent(value)}`,
        )
        .join("&");

      fetch(googleFormsURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataSerialized,
      })
        .then(() => {
          // Optionally, you can redirect the user to a thank-you page
          // window.location = 'http://www.mydomain.com/thankyoupage.html';
        })
        .catch((error) => {
          console.error("Error submitting the form:", error);
        });
      window.location.href = "/#/thx";
    } else {
      alert("Please check both 'I am 18 or older' and 'I agree' checkboxes.");
    }
  };

  const onClickLanguageChange = () => {
    const storedLanguage = localStorage.getItem("i18nextLng");
    if (storedLanguage === "ro") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ro");
    }
  };

  return (
    <div id="apply_page" className="apply_page_font">
      <div id="apply_page_inside">
        <div id="apply_top">
          <img id="apply_nav_img" src="/images/logo.png" />
          <div id="apply-lang" onClick={onClickLanguageChange}>
            <span id="apply_lang_bold">{t("apply.lang")}</span> |{" "}
            <span id="apply_lang_thin">{t("apply.nolang")}</span>
          </div>
        </div>

        <div id="apply_div2">
          {" "}
          <img id="apply_block2_img1" src="/images/apply/block2_img1.png" />
        </div>
        <div id="apply_div3">
          {" "}
          <div id="apply_div3_title">
            {t("apply.please_check1")}{" "}
            <span id="apply_div3_title_gray">{t("apply.please_check2")}</span>
          </div>
          <div className="apply_check_div">
            {" "}
            <input type="checkbox" className="apply_checkbox" />
            <span id="apply_check_option1">{t("apply.check_option1")}</span>
          </div>
          <div className="apply_check_div">
            <input type="checkbox" className="apply_checkbox" />
            <span id="apply_check_option2">{t("apply.check_option2")}</span>
          </div>
          <div className="apply_check_div">
            <input
              type="checkbox"
              id="apply_check_option3"
              className="apply_checkbox"
            />
            <span>{t("apply.check_option3")}</span>
          </div>
          <div className="apply_check_div">
            <input
              type="checkbox"
              id="apply_check_option4"
              className="apply_checkbox"
            />
            <span>{t("apply.check_option4")}</span>
          </div>
        </div>

        <div id="apply_div4">
          <form id="apply_form" onSubmit={handleSubmit} method="POST">
            <div id="apply_name_div">
              <div id="apply_name_div_side1">
                <input
                  required={true}
                  id="1926189810"
                  type="text"
                  name="entry.1926189810"
                  className="apply_form_group apply_form_group_sp"
                  value={formData["entry.1926189810"]}
                  onChange={handleInputChange}
                  placeholder={t<string>("apply.name_inside")}
                />
                <div className="apply_form_input_name">
                  <span className="apply_form_label">
                    {" "}
                    &nbsp;&nbsp; {t("apply.name")}&nbsp;
                    <span className="aplly_red_text">*</span>&nbsp;&nbsp;
                  </span>
                </div>
              </div>
              <div id="apply_name_div_side2">
                <input
                  required={true}
                  className="apply_form_group apply_form_group_sp"
                  id="274219221"
                  type="text"
                  name="entry.274219221"
                  value={formData["entry.274219221"]}
                  onChange={handleInputChange}
                  placeholder={t<string>("apply.surname_inside")}
                />
                <div className="apply_form_input_name">
                  <span className="apply_form_label">
                    {" "}
                    &nbsp;&nbsp; {t("apply.surname")}&nbsp;
                    <span className="aplly_red_text">*</span>&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <div className="apply_input_div_row">
              <input
                required={true}
                className="apply_form_group"
                id="1785974725"
                maxLength={9}
                name="entry.1785974725"
                pattern="[0]{1,1}[2,6,7]{1,1}[0-9]{7,7}"
                value={formData["entry.1785974725"]}
                onChange={handleInputChange}
                placeholder=" 0********"
              />
              <div className="apply_form_input_name2">
                <span className="apply_form_label">
                  {" "}
                  &nbsp;&nbsp; {t("apply.phone")}&nbsp;
                  <span className="aplly_red_text">*</span>&nbsp;&nbsp;
                </span>
              </div>
            </div>
            <div className="apply_input_div_row">
              <input
                required={true}
                className="apply_form_group"
                id="1996221300"
                type="email"
                name="entry.1996221300"
                pattern="[a-zA-Z0-9]+[a-z0-9._%+-]+[a-zA-Z0-9]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                value={formData["entry.1996221300"]}
                onChange={handleInputChange}
                placeholder={t<string>("apply.email_inside")}
              />
              <div className="apply_form_input_name2">
                <span className="apply_form_label">
                  {" "}
                  &nbsp;&nbsp; {t("apply.email")}&nbsp;
                  <span className="aplly_red_text">*</span>&nbsp;&nbsp;
                </span>
              </div>
            </div>
            <div className="apply_input_div_row">
              <input
                required={true}
                className="apply_form_group"
                id="2145100513"
                type="text"
                name="entry.2145100513"
                value={formData["entry.2145100513"]}
                onChange={handleInputChange}
                placeholder="ex: https://www.facebook.com/ ------------"
              />
              <div className="apply_form_input_name2">
                <span className="apply_form_label">
                  {" "}
                  &nbsp;&nbsp; {t("apply.SM_link")}&nbsp;
                  <span className="aplly_red_text">*</span>&nbsp;&nbsp;
                </span>
              </div>
            </div>

            <input
              style={{ display: "none" }}
              className="apply_form_group"
              id="1342289073"
              type="text"
              name="entry.1342289073"
              value={formData["entry.1342289073"]}
              onChange={handleInputChange}
              placeholder="ex: https://www.facebook.com/ ------------"
            />

            <input type="hidden" name="fvv" value="1" />
            <input type="hidden" name="fbzx" value="2297128510304169969" />
            <input type="hidden" name="pageHistory" value="0" />

            <div className="apply_check_div_2">
              <input type="checkbox" className="apply_checkbox" id="apply_18" />
              <span>{t("apply.check_18")}</span>
            </div>

            <div className="apply_check_div_2">
              <input
                type="checkbox"
                className="apply_checkbox"
                id="apply_agree"
              />
              <span>{t("apply.check_agree")}</span>
            </div>

            <div> &nbsp;</div>

            <div id="apply_form_send1" className="apply_form_send">
              <input
                id="apply_send_btn"
                className="btn btn-primary"
                type="submit"
                value={t<string>("apply.apply_btn")}
              />
            </div>
          </form>

          <div id="apply_post_txt">{t("apply.post_send")}</div>

          <div>
            <div className="apply_qandq">
              {t("apply.get_link")}{" "}
              <Link
                to="https://www.google.com/search?q=how+to+get+my+social+media+link&oq=ho+go+get+my+social+media&gs_lcrp=EgZjaHJvbWUqCQgBEAAYDRiABDIGCAAQRRg5MgkIARAAGA0YgAQyCQgCEAAYDRiABDIKCAMQABiGAxiKBTIKCAQQABiGAxiKBTIKCAUQABiGAxiKBTIKCAYQABiGAxiKBdIBCTEyMjY1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
                className="apply_blue_txt"
              >
                {t("apply.here")}
              </Link>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div id="apply_check_social">{t("apply.social_links")}</div>

          <div id="apply_social_div_inline">
            <Link to={"https://www.facebook.com/aiesec.in.chisinau"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="apply_social_svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_231_2660)">
                  <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_231_2660">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link to={"https://www.instagram.com/aiesec_in_chisinau"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="apply_social_svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                  fill="#000100"
                />
                <path
                  d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                  fill="#000100"
                />
                <path
                  d="M39.6937 11.1848C39.6937 12.7785 38.4 14.0629 36.8156 14.0629C35.2219 14.0629 33.9375 12.7691 33.9375 11.1848C33.9375 9.59102 35.2313 8.30664 36.8156 8.30664C38.4 8.30664 39.6937 9.60039 39.6937 11.1848Z"
                  fill="#000100"
                />
              </svg>
            </Link>
            <Link to={"https://www.linkedin.com/showcase/aiesec-in-chisinau/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="apply_social_svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clip-path="url(#clip0_231_2670)">
                  <path
                    d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_231_2670">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link to={"https://www.tiktok.com/@aiesec_in_chisinau"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="apply_social_svg"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M34.3534 17.3269C37.4401 19.5413 41.2215 20.8442 45.3055 20.8442V12.9572C44.5326 12.9574 43.7617 12.8765 43.0055 12.7157V18.9239C38.9218 18.9239 35.1409 17.621 32.0534 15.4068V31.5017C32.0534 39.5533 25.5496 46.0798 17.5272 46.0798C14.5338 46.0798 11.7516 45.1716 9.44043 43.6141C12.0783 46.3208 15.7569 48 19.8267 48C27.8496 48 34.3537 41.4734 34.3537 33.4215V17.3269H34.3534ZM37.1907 9.36999C35.6133 7.64045 34.5775 5.40535 34.3534 2.93435V1.91992H32.1738C32.7224 5.06056 34.5938 7.74374 37.1907 9.36999ZM14.5146 37.4356C13.6333 36.2759 13.157 34.8572 13.1591 33.3985C13.1591 29.716 16.1339 26.7302 19.804 26.7302C20.488 26.7301 21.1679 26.8352 21.8197 27.0427V18.9795C21.058 18.8748 20.2892 18.8303 19.5207 18.8466V25.1226C18.8684 24.915 18.1882 24.8096 17.504 24.8103C13.8339 24.8103 10.8593 27.7957 10.8593 31.4787C10.8593 34.0828 12.3462 36.3373 14.5146 37.4356Z"
                  fill="#FF004F"
                />
                <path
                  d="M32.0529 15.4066C35.1404 17.6208 38.9213 18.9237 43.005 18.9237V12.7156C40.7255 12.2283 38.7075 11.0328 37.1903 9.36999C34.5931 7.74358 32.722 5.0604 32.1733 1.91992H26.4482V33.4212C26.4352 37.0936 23.4655 40.0672 19.8032 40.0672C17.6451 40.0672 15.7279 39.0348 14.5136 37.4356C12.3454 36.3373 10.8585 34.0826 10.8585 31.4788C10.8585 27.7962 13.8331 24.8104 17.5032 24.8104C18.2064 24.8104 18.8842 24.9203 19.5199 25.1228V18.8468C11.6384 19.0102 5.2998 25.473 5.2998 33.4214C5.2998 37.3892 6.87827 40.9861 9.44013 43.6143C11.7513 45.1716 14.5335 46.08 17.5268 46.08C25.5494 46.08 32.0531 39.5531 32.0531 31.5017V15.4066H32.0529Z"
                  fill="black"
                />
                <path
                  d="M43.0051 12.7156V11.037C40.9495 11.0401 38.9343 10.4624 37.1903 9.36987C38.7342 11.0661 40.7671 12.2357 43.0051 12.7156ZM32.1734 1.91997C32.1211 1.61982 32.0809 1.3177 32.053 1.01443V0H24.148V31.5016C24.1354 35.1735 21.1658 38.1471 17.5033 38.1471C16.428 38.1471 15.4128 37.891 14.5137 37.4358C15.7279 39.0349 17.6452 40.0671 19.8033 40.0671C23.4652 40.0671 26.4354 37.0938 26.4482 33.4214V1.91997H32.1734ZM19.5203 18.8468V17.0598C18.8598 16.9692 18.1938 16.9237 17.5271 16.924C9.50383 16.9239 3 23.4508 3 31.5016C3 36.5491 5.55612 40.9974 9.44034 43.614C6.87848 40.986 5.30002 37.3889 5.30002 33.4213C5.30002 25.473 11.6385 19.0102 19.5203 18.8468Z"
                  fill="#00F2EA"
                />
              </svg>
            </Link>
          </div>

          <div id="apply_check_address">
            {t("apply.adress")}
            <br />
            <Link
              id="apply_adress_link"
              to={"https://goo.gl/maps/JNWbv7A4wK8cBGgq8"}
            >
              {t("apply.adress_maps")}
            </Link>
          </div>

          <div id="apply_check_social">{t("apply.reserved")}</div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
