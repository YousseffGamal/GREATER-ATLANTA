import React, { useState, useRef, useEffect } from "react";
import { Button, Img, Text } from "components";
import './style.css'
import { Checkbox } from 'antd';
const handleTermsClick = () => {
  window.location.href = '/terms';
};
const DesktopOneStackrectangleten = (props) => {
  const [propertyAddress, setPropertyAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [reasonForSelling, setReasonForSelling] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
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


  const addLead = async () => {
    if (propertyAddress === "" || email === "" || phone === "" || firstName === "" || lastName === "") {
      alert("Please fill all the required fields!")
      return;
    }
    const lead = {
      name: `${firstName} ${lastName}`,
      contacts: [
        {
          emails: [
            {
              type: "office",
              email: email
            }
          ],
          phones: [
            {
              type: "office",
              phone: phone
            }
          ]
        }
      ],
      "custom.cf_Jqi41RIvDLMII7pomnWvbgXHiJ3sLbgQL6wA2MId2s1": `Number of Bedrooms : ${selectedOptionBedrooms}, Number of Bathrooms : ${selectedOptionBathrooms}, Year the property was built : ${year}, Condition : ${selectedOptionCondition}, Reason For Selling : ${reasonForSelling}, Selling time : ${selectedOptionSellTiming}, Extra info : ${extraInfo}`,
      addresses: [
        {
          address_1: propertyAddress
        }
      ]
    }
    try {
      const response = await fetch('https://api.greateratlhomebuyers.com/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(lead)
      })
      console.log(lead);
      console.log(response);
      
      if (response.ok === true) {
        alert('Your data has been submitted successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPropertyAddress('');
        setYear('');
        setReasonForSelling('');
        setExtraInfo('');
        setSelectedOptionBedrooms('');
        setSelectedOptionBathrooms('');
        setSelectedOptionCondition('');
        setSelectedOptionSellTiming('');
      }
      else {
        alert('There was an error submitting your data. Please try again later.');
      }
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  }
  const handleEmailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      setEmail(''); // Clearing the email field if invalid
    }
  };


  const handlePhoneChange = (value) => {
    const sanitizedValue = value.replace(/[^0-9+]/g, '');
    setPhone(sanitizedValue);
  };

  const handlePhoneValidation = () => {
    if (!/^[0-9+]*$/.test(phone)) {
      alert('Please enter a valid phone number.');
      setPhone('');
    }
  };

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
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
            <div className="s-from flex flex-col gap-[22px] items-center justify-start w-full">
              {formIndex === 0 && (
                <>
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    value={propertyAddress || ''}
                    onChange={(e) => setPropertyAddress(e.target.value)}
                    placeholder={props?.propertyaddressbutton}
                  />
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    value={phone || ''}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder={props?.phonebutton}
                    onBlur={handlePhoneValidation} // Added onBlur event for validation
                  />
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    value={email || ''}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={props?.emailbutton}
                    onBlur={handleEmailValidation} // Added onBlur event for validation
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
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName || ''}
                    />
                    <input
                      type="text"
                      style={{ backgroundColor: "rgba(234, 235, 243, 0.8)", width: '50%', minWidth: '270px' }}
                      className="names !text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center flex-1"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName || ''}
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
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBedrooms('1')}> 1</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBedrooms('2')}> 2</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBedrooms('3')}> 3</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBedrooms('4')}> 4</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBedrooms('+5')}> +5</li>
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
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBathrooms('1')}> 1</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBathrooms('2')}> 2</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBathrooms('3')}> 3</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBathrooms('4')}> 4</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickBathrooms('+5')}> +5</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    placeholder="The year the property was built"
                    onChange={(e) => setYear(e.target.value)}
                    value={year || ''}
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
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickCondition('Its needs a lot of work')}> Its needs a lot of work</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickCondition('it needs some work')}> it needs some work</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickCondition("it's in good condition")}> it's in good condition</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickCondition("it's in great condition")}> it's in great condition</li>

                        </ul>
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    placeholder="Reason for selling"
                    onChange={(e) => setReasonForSelling(e.target.value)}
                    value={reasonForSelling || ''}
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
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickSellTiming('Immediately')}> Immediately</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickSellTiming('1-3 months')}> 1-3 months</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickSellTiming('3-6 months')}> 3-6 months</li>
                          <li style={{ textAlign: 'center', marginTop: '5px' }} onClick={() => handleOptionClickSellTiming('not sure')}> not sure</li>

                        </ul>
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    style={{ backgroundColor: "rgba(234, 235, 243, 0.8)" }}
                    className="!text-gray-800 cursor-pointer font-medium font-montserrat leading-[normal] rounded-lg text-[13.84px] text-center w-full"
                    placeholder="Is there anything else you'd like to tell us?"
                    onChange={(e) => setExtraInfo(e.target.value)}
                    value={extraInfo || ''}
                  />
                  {/* Button to go back to the first form */}
                  <Button
                    className="cursor-pointer font-gilroybold leading-[normal] rounded-lg text-[17.3px] text-center tracking-[0.69px] w-[151px]"
                    shape="round"
                    color="light_blue_800"
                    size="xs"
                    variant="fill"
                    onClick={handleBack}
                    style={{ width: '100%' }}

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
                onClick={formIndex === 0 ? handleNext : addLead}
                style={{ width: '100%' }}
              >
                {formIndex === 0 ? props?.nextbutton : "GET MY FAIR CASH OFFER!"}
              </Button>
              <div className="flex sm:flex-col flex-row gap-[12.97px] items-center justify-center pb-[4.32px] w-full">
                <div className="flex flex-col h-[19px] md:h-auto items-center justify-center outline outline-[0.5px] outline-gray-800_01 p-[4.32px] rounded w-[19px]">
                  <Checkbox
                    className="custom-checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
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
  propertyaddressbutton: "Property address",
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
      <br />
      <a style={{ fontWeight: "bold", textDecoration: "none" }} href="/terms">terms and conditions </a>
    </>
  ),
};

export default DesktopOneStackrectangleten;
