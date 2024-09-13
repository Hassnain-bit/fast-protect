import MaxWidth from "../components/MaxWidth"
import SectionLabel from "../components/SectionLabel"
import Spacer from "../components/Spacer"
import IconSimpleSend from "../assets/icons/IconSimpleSend";
import SplitView from "../components/SplitView";
import InputText from "../components/InputText";
import { useState } from "react";
import IconSimplePerson from "../assets/icons/IconSimplePerson";
import IconSimpleAt from "../assets/icons/IconSimpleAt";
import IconSimpleSmartPhone from "../assets/icons/IconSimpleSmartPhone";
import ButtonAction from "../components/ButtonAction";
import FloatingLogo from "../components/FloatingLogo";

function SectionContact() {

  const [formValues, setFormValues] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      freeDay: "",
      freeHour: "",
      phone: ""
    }
  );

  const onValueChange = ({ name, value }) => {
    setFormValues((prevValue) => ({ ...prevValue, [name]: value }))
  }

  return (
    <div style={{ padding: "var(--fp-size-section-padding-v) 0", backgroundColor: "var(--fp-color-white)", position: "relative" }}>
      <MaxWidth>
        <div style={{ position: "relative", zIndex: "1" }}>
          <SectionLabel
            icon={<IconSimpleSend fill={"var(--fp-comp-section-label-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
            title={"Contact"}
            isWhite={true}
          />
          <Spacer size={"16px"} />
          <h2 className='fp-text-style-header-large'>
            Nos experts sans à votre disposition
            <br />
            Contactez-nous en un seul clique!
          </h2>
          <Spacer size={"48px"} />
          <SplitView separator={"or"} isWhite={true}>
            <form action="">
              <InputText
                placeholder={"first name"}
                name={"firstName"}
                value={formValues.firstName}
                onChange={onValueChange}
                icon={<IconSimplePerson fill={"var(--fp-comp-input-text-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                isWhite={true}
              />
              <Spacer size={"8px"} />
              <InputText
                placeholder={"last name"}
                name={"lastName"}
                value={formValues.lastName}
                onChange={onValueChange}
                icon={<IconSimplePerson fill={"var(--fp-comp-input-text-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                isWhite={true}
              />
              <Spacer size={"8px"} />
              <InputText
                placeholder={"email address"}
                name={"email"}
                value={formValues.email}
                onChange={onValueChange}
                icon={<IconSimpleAt fill={"var(--fp-comp-input-text-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                isWhite={true}
              />
              <Spacer size={"16px"} />
              <ButtonAction
                title={"Get a quote"}
                icon={<IconSimpleSend fill={"var(--fp-comp-button-action-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                onClick={() => { console.log("submit") }}
                isSpecial={true}
                isFullWidth={true}
              />
            </form>
            <form action="">
              <InputText
                placeholder={"free day"}
                name={"freeDay"}
                value={formValues.freeDay}
                onChange={onValueChange}
                isWhite={true}
              />
              <Spacer size={"8px"} />
              <InputText
                placeholder={"free hour"}
                name={"freeHour"}
                value={formValues.freeHour}
                onChange={onValueChange}
                isWhite={true}
              />
              <Spacer size={"8px"} />
              <InputText
                placeholder={"phone number"}
                name={"phone"}
                value={formValues.phone}
                onChange={onValueChange}
                icon={<IconSimpleSmartPhone fill={"var(--fp-comp-input-text-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                isWhite={true}
              />
              <Spacer size={"16px"} />
              <ButtonAction
                title={"Book a call"}
                icon={<IconSimpleSend fill={"var(--fp-comp-button-action-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                onClick={() => { console.log("submit") }}
                isSpecial={false}
                isFullWidth={true}
              />
            </form>
          </SplitView>
        </div>
      </MaxWidth>

      <FloatingLogo isWhite={false} />
    </div>
  )
}

export default SectionContact