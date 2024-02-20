import React, { useState, useRef, useEffect } from "react";
import { Button, Img, Text } from "components";
import './style.css'
const DesktopOneStackrectangleten = (props) => {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [formIndex, setFormIndex] = useState(0);
  const contentRef = useRef(null);
  const [backgroundWidth, setBackgroundWidth] = useState("15%");
  const [backgroundHeight, setBackgroundHeight] = useState("100%");

  const handleNext = () => {
    setFormIndex(formIndex + 1);
  };

  const handleBack = () => {
    setFormIndex(0); // Go back to the first form
  };

  useEffect(() => {
    if (contentRef.current) {
      const { width, height } = contentRef.current.getBoundingClientRect();
      setBackgroundWidth(`${width}px`);
      setBackgroundHeight(`${height}px`);
    }
  }, [formIndex]);
  const [isDropdownOpenBedrooms, setIsDropdownOpenBedrooms] = useState(false);
  const [selectedOptionBedrooms, setSelectedOptionBedrooms] = useState('');
  
  const [isDropdownOpenBathrooms, setIsDropdownOpenBathrooms] = useState(false);
  const [selectedOptionBathrooms, setSelectedOptionBathrooms] = useState('');

  const toggleDropdownBedrooms = () => {
    setIsDropdownOpenBedrooms(!isDropdownOpenBedrooms);
  };

  const toggleDropdownBathrooms = () => {
    setIsDropdownOpenBathrooms(!isDropdownOpenBathrooms);
  };

  const handleOptionClickBedrooms = (option) => {
    setSelectedOptionBedrooms(option);
    setIsDropdownOpenBedrooms(false);
  };

  const handleOptionClickBathrooms = (option) => {
    setSelectedOptionBathrooms(option);
    setIsDropdownOpenBathrooms(false);
  };


  const [isDropdownOpenCondition, setIsDropdownOpenCondition] = useState(false);
  const [selectedOptionCondition, setSelectedOptionCondition] = useState('');
  
  const toggleDropdownCondition = () => {
    setIsDropdownOpenCondition(!isDropdownOpenCondition);
  };

  const handleOptionClickCondition = (option) => {
    setSelectedOptionCondition(option);
    setIsDropdownOpenCondition(false);
  };

  const [isDropdownOpenSellTiming, setIsDropdownOpenSellTiming] = useState(false);
  const [selectedOptionSellTiming, setSelectedOptionSellTiming] = useState('');
  
  const toggleDropdownSellTiming = () => {
    setIsDropdownOpenSellTiming(!isDropdownOpenSellTiming);
  };

  const handleOptionClickSellTiming = (option) => {
    setSelectedOptionSellTiming(option);
    setIsDropdownOpenSellTiming(false);
  };
  return (
    <>
      <div className={props.className}>
        <div
          style={{ backgroundColor: "rgba(234, 235, 243, 0.8)", width: backgroundWidth, height: backgroundHeight }}
          className=" sss absolute bg-indigo-50_b0 inset-x-[0] mx-auto rounded-[25px] top-[0] w-full transition-all duration-500"
        ></div>
        <div ref={contentRef} className=" sm:bottom-[50px] flex flex-col items-center justify-center mx-auto sm:px-5 px-[27.68px] py-[24.22px] relative rounded-[25px] shadow-bs w-[624px] md:w-full">
          <div className="tryyyy flex flex-col gap-[21.62px] items-center justify-start w-[545px] sm:w-full">
            <div className="flex flex-col items-center justify-center py-[3.46px] w-auto">
              <Text
                className="sm:text-[18.49px] md:text-[20.49px] text-[22.49px] text-light_blue-800 w-auto"
                size="txtMontserratRomanMedium2249"
              >
                {props?.sellmyhousetext}
              </Text>
            </div>
            <div  className="s-from flex flex-col gap-[22px] items-center justify-start w-full">
              {formIndex === 0 && (
                <>
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    value={propertyAddress}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    placeholder={props?.propertyaddressbutton}
                  />
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={props?.phonebutton}
                  />
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={props?.emailbutton}
                  />
                </>
              )}
              {formIndex === 1 && (
                <>
       
       <div className="two-inputs" style={{ display: 'flex', gap: '10px' }}>
  <input
    type="text"
    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)", width: '50%', minWidth: '270px' }}
    className="names !text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center flex-1"
    placeholder="First Name"
  />
  <input
    type="text"
    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)", width: '50%', minWidth: '270px' }}
    className="names !text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center flex-1"
    placeholder="Last Name"
  />
</div>

<div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            style={{
              backgroundColor: 'rgba(234, 235, 243, 0.8)',
              width: '100%',
              cursor: 'pointer',
            }}
            className="!text-gray-800 font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center"
            placeholder="Number of Bedrooms"
            onFocus={toggleDropdownBedrooms}
            readOnly // Prevents typing
            value={selectedOptionBedrooms || ''}
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={toggleDropdownBedrooms}
          >
            {/* Dropdown icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 11.225l-4.408-5.15C3.242 5.705 3.74 5 4.527 5h6.946c.787 0 1.285.705.935 1.075L8 11.225z" />
            </svg>
          </div>
        </div>
        {isDropdownOpenBedrooms && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 5px)',
              left: 0,
              backgroundColor: 'rgba(234, 235, 243, 0.8)',
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              zIndex: 1,
            }}
          >
            {/* Dropdown content */}
            <ul >
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBedrooms('1')}> 1</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBedrooms('2')}> 2</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBedrooms('3')}> 3</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBedrooms('4')}> 3</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBedrooms('+5')}> +5</li>
            </ul>
          </div>
        )}
      </div>
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            style={{
              backgroundColor: 'rgba(234, 235, 243, 0.8)',
              width: '100%',
              cursor: 'pointer',
            }}
            className="!text-gray-800 font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center"
            placeholder="Number of Bathrooms"
            onFocus={toggleDropdownBathrooms}
            readOnly // Prevents typing
            value={selectedOptionBathrooms || ''}
          />
          <div
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={toggleDropdownBathrooms}
          >
            {/* Dropdown icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 11.225l-4.408-5.15C3.242 5.705 3.74 5 4.527 5h6.946c.787 0 1.285.705.935 1.075L8 11.225z" />
            </svg>
          </div>
        </div>
        {isDropdownOpenBathrooms && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 5px)',
              left: 0,
              backgroundColor: 'rgba(234, 235, 243, 0.8)',
              width: '100%',
              padding: '5px',
              borderRadius: '5px',
              zIndex: 1,
            }}
          >
            {/* Dropdown content */}
            <ul >
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBathrooms('1')}> 1</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBathrooms('2')}> 2</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBathrooms('3')}> 3</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBathrooms('4')}> 3</li>
              <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickBathrooms('+5')}> +5</li>
            </ul>
          </div>
        )}
      </div>
    <input
      type="text"
      style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
      className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
      placeholder="The year The Propert Was Built"
    />
   <div style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          style={{
            backgroundColor: 'rgba(234, 235, 243, 0.8)',
            width: '100%',
            cursor: 'pointer',
          }}
          className="!text-gray-800 font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center"
          placeholder="Condition"
          onFocus={toggleDropdownCondition}
          readOnly // Prevents typing
          value={selectedOptionCondition || ''}
        />
        <div
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
          onClick={toggleDropdownCondition}
        >
          {/* Dropdown icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 11.225l-4.408-5.15C3.242 5.705 3.74 5 4.527 5h6.946c.787 0 1.285.705.935 1.075L8 11.225z" />
          </svg>
        </div>
      </div>
      {isDropdownOpenCondition && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 5px)',
            left: 0,
            backgroundColor: 'rgba(234, 235, 243, 0.8)',
            width: '100%',
            padding: '5px',
            borderRadius: '5px',
            zIndex: 1,
          }}
        >
          {/* Dropdown content */}
          <ul >
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickCondition('New')}> Its needs a lot of work</li>
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickCondition('Used')}> it needs some work</li>
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickCondition('Refurbished')}> it's in good condition</li>
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickCondition('great')}> it's in great condition</li>

          </ul>
        </div>
      )}
    </div>
    <input
      type="text"
      style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
      className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
      placeholder="Reason For Seeling"
    />
  
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          style={{
            backgroundColor: 'rgba(234, 235, 243, 0.8)',
            width: '100%',
            cursor: 'pointer',
          }}
          className="!text-gray-800 font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center"
          placeholder="How Soon Will You Like To Sell"
          onFocus={toggleDropdownSellTiming}
          readOnly // Prevents typing
          value={selectedOptionSellTiming || ''}
        />
        <div
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
          onClick={toggleDropdownSellTiming}
        >
          {/* Dropdown icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 11.225l-4.408-5.15C3.242 5.705 3.74 5 4.527 5h6.946c.787 0 1.285.705.935 1.075L8 11.225z" />
          </svg>
        </div>
      </div>
      {isDropdownOpenSellTiming && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 5px)',
            left: 0,
            backgroundColor: 'rgba(234, 235, 243, 0.8)',
            width: '100%',
            padding: '5px',
            borderRadius: '5px',
            zIndex: 1,
          }}
        >
          {/* Dropdown content */}
          <ul >
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickSellTiming('Within a week')}> Immediately</li>
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickSellTiming('Within a month')}> 1-3 months</li>
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickSellTiming('Within three months')}> 3-6 minths</li>
            <li style={{textAlign:'center',marginTop:'5px'}} onClick={() => handleOptionClickSellTiming('not sure')}> not sure</li>

          </ul>
        </div>
      )}
    </div>
       <input
      type="text"
      style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
      className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
      placeholder="Is There Anything Else You'd Like TO Tell Us?"
    />
                  {/* Button to go back to the first form */}
                  <Button
                    className="cursor-pointer font-gilroybold leading-[normal] rounded-lg text-[17.3px] text-center tracking-[0.69px] w-[151px]"
                    shape="round"
                    color="light_blue_800"
                    size="xs"
                    variant="fill"
                    onClick={handleBack}
                    style={{width:'100%'}}

                  >
                    Back
                  </Button>
                </>
              )}
              <Button
                className="cursor-pointer font-gilroybold leading-[normal] rounded-lg text-[17.3px] text-center tracking-[0.69px] w-[151px]"
                shape="round"
                color="light_blue_800"
                size="xs"
                variant="fill"
                onClick={handleNext}
                style={{width:'100%'}}
              >
                {formIndex === 0 ? props?.nextbutton : "GET MY FAIR CASH OFFER!"}
              </Button>
              <div className="flex sm:flex-col flex-row gap-[12.97px] items-center justify-center pb-[4.32px] w-full">
                <div className="flex flex-col h-[19px] md:h-auto items-center justify-center outline outline-[0.5px] outline-gray-800_01 p-[4.32px] rounded w-[19px]">
                  <Img
                    className="h-[9px] w-[11px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="max-w-[481px] md:max-w-full text-[12.11px] text-gray-800_02 tracking-[0.48px]"
                  size="txtGilroyRegular1211"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneStackrectangleten.defaultProps = {
  sellmyhousetext: "Sell My House Fast For Cash!",
  propertyaddressbutton: "Property Address",
  phonebutton: "Phone",
  emailbutton: "Email",
  nextbutton: "Next",
  descriptiontext: (
    <>
      By submitting contact information on this website, you are consenting to
      receive
      <br />
      calls, SMS, and emails from Greater Atlanta and its affiliates. You
      certify that you
      <br />
      are the owner of the contact information provided.
    </>
  ),
};

export default DesktopOneStackrectangleten;
