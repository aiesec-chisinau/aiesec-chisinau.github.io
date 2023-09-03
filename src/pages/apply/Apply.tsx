import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./apply.css";

const Apply: React.FC = () => {
  const { t, i18n } = useTranslation("home");

  const [formData, setFormData] = useState({
    "entry.1926189810": "",
    "entry.274219221": "",
    "entry.1785974725": "",
    "entry.1996221300": "",
    "entry.2145100513": "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
        alert(t("apply.formSubmitted"));
        // Optionally, you can redirect the user to a thank-you page
        // window.location = 'http://www.mydomain.com/thankyoupage.html';
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
      });
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
    <div id="apply_page">
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
            <span>I speak English</span>
          </div>
          <div className="apply_check_div">
            <input type="checkbox" className="apply_checkbox" />
            <span>I study at university</span>
          </div>
          <div className="apply_check_div">
            <input type="checkbox" className="apply_checkbox" />
            <span>I live in Chisinau</span>
          </div>
          <div className="apply_check_div">
            <input type="checkbox" className="apply_checkbox" />
            <span>I am working (have a job)</span>
          </div>
        </div>
      </div>

      <form id="apply_form" onSubmit={handleSubmit} method="POST">
        <div>
          <div>
            <input
              id="1926189810"
              type="text"
              name="entry.1926189810"
              className="apply_form_group"
              value={formData["entry.1926189810"]}
              onChange={handleInputChange}
              placeholder={t<string>("apply.name_inside")}
            />
            <div className="apply_fomt_input_name">{t("apply.name")}</div>

            <input
              className="apply_form_group"
              id="274219221"
              type="text"
              name="entry.274219221"
              value={formData["entry.274219221"]}
              onChange={handleInputChange}
              placeholder={t<string>("apply.surname_inside")}
            />
            <div className="apply_fomt_input_name">{t("apply.name")}</div>
          </div>
        </div>
        <div>
          <input
            className="apply_form_group"
            id="1785974725"
            type="text"
            name="entry.1785974725"
            value={formData["entry.1785974725"]}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            className="apply_form_group"
            id="1785974725"
            type="text"
            name="entry.1785974725"
            value={formData["entry.1785974725"]}
            onChange={handleInputChange}
          />
        </div>

        <input type="hidden" name="fvv" value="1" />
        <input type="hidden" name="fbzx" value="2297128510304169969" />
        <input type="hidden" name="pageHistory" value="0" />

        <input
          id="apply_send_btn"
          className="btn btn-primary"
          type="submit"
          value="Apply"
        />
      </form>
    </div>
  );
};

export default Apply;
