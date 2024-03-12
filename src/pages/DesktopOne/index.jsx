import React, { useState } from 'react';

import { Button, Img, List, Text } from "components";
import DesktopOneStackrectangleten from "components/DesktopOneStackrectangleten";
import './style.css'
import { Modal, Typography } from 'antd';
const { Text: AntdText } = Typography; // Rename 'Text' to 'AntdText'

const DesktopOnePage = () => {

  const [modalVisible, setModalVisible] = useState(false);

  const handleTermsClick = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div style={{ width: '100%' }} className="top bg-gradient  flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div style={{ width: '100%' }} className="  flex flex-col md:px-5 relative w-full">
          <div style={{ width: '100%' }} className="h-[846px] mx-auto w-full ">
            <div style={{ width: '100%' }} className="h-[846px] m-auto w-full relative">
              <Img
                className="go h-[846px] m-auto object-cover w-full"
                src="images/img_1084crestmontafter.png"
                alt="1084crestmontaf"
              />
              <div className="absolute bg-gradient1 flex flex-col h-max inset-y-[0] items-start justify-start left-[0] my-auto p-[131px] md:px-10 sm:px-5 w-[61%]">
                <div className="hhhhhhhh flex flex-col gap-3.5 items-start justify-start my-[148px] w-auto sm:w-full">
                  <Text
                    className="text-first md:left-[263px] absolute sm:text-[41.33px] md:text-[47.33px] text-[55.33px] text-gray-900"
                    size="txtGilroyBold5533"
                    style={{ top: '0', zIndex: '1', outline: 'none' }} // Add outline: 'none'
                  >
                    <>
                      Get a Cash Offer <br />
                      for Your House
                    </>
                  </Text>
                  <Text
                    className="text-second md:left-[258px] absolute sm:text-[16.1px] md:text-[18.1px] text-[20.1px] text-gray-900"
                    size="txtGilroyRegular201"
                    style={{ top: '0', zIndex: '1', outline: 'none' }} // Add outline: 'none'
                  >
                    <>
                      At Greater Atlanta Home Buyers, LLC, We Buy
                      <br />
                      Houses For Cash Throughout Georgia! No
                      <br />
                      Repairs. No Commission. Fill Out The
                      <br />
                      Form To Get Started On Your
                      <br />
                      FREE CASH OFFER Today!
                    </>
                  </Text>
                </div>
              </div>
            </div>

            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[1440px] md:px-10 sm:px-5 px-[131px] py-5 w-full">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Img
                    className="h-40 md:h-auto object-cover sm:w-[200px] w-[269px]"
                    src="images/img_greateratlanta.png"
                    alt="greateratlanta"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-28 items-end justify-start mt-[-626px] mx-auto w-auto z-[1]">
            <DesktopOneStackrectangleten className="yaaa pb-[135px] relative rounded-[25px] w-[624px] md:w-full" />
            <div className="flex flex-col font-gilroybold md:gap-10 gap-[105px] items-center justify-start w-full">
              <div className="flex flex-col gap-[34px] items-center justify-start w-[79%] md:w-full">
                <Text
                  className="dsads md:relative sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 md:top-[50px]"
                  size="txtGilroyBold40"
                >
                  Recent Properties
                </Text>
                <div className="font-gilroymedium sm:h-[1309px] h-[1324px] md:h-[1925px] relative w-full">
                  <Img
                    className="framee absolute h-[1309px] inset-[0] m-auto w-[922px]"
                    src="images/img_frame52.svg"
                    alt="frameFiftyTwo"
                  />
                  <div className="imagess absolute flex flex-col h-max inset-[0] items-center justify-center m-auto max-w-[902px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[70px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="md:gap-5 gap-[70px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="iiframee bg-indigo-50 flex flex-1 flex-col gap-[23px] h-[390px] md:h-auto items-center justify-start rounded-[30px] shadow-bs1 w-full">
                            <iframe frameBorder="0" className="iiframe juxtapose h-[312px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-[416px] md:w-full" width="100%" height="100%" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=f98a6578-b980-11ee-9ddd-3f41531135b6"></iframe>
                            <Text className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto" size="txtGilroyMedium24">
                              Crestmont Lane
                            </Text>
                          </div>
                          <div className="iiframee bg-indigo-50 flex flex-1 flex-col gap-[23px] h-[390px] md:h-auto items-center justify-start rounded-[30px] shadow-bs1 w-full" style={{ maxHeight: '390px', overflow: 'hidden' }}>
                            <iframe
                              frameBorder="0"
                              className="iiframe h-[312px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-[416px] md:w-full"
                              width="100%"
                              height="312px"
                              src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=9133ca7c-b981-11ee-9ddd-3f41531135b6"
                            ></iframe>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtGilroyMedium24"
                            >
                              Arbor Gate
                            </Text>
                          </div>
                          <div className="iiframee bg-indigo-50 flex flex-1 flex-col gap-[23px] h-[390px] md:h-auto items-center justify-start rounded-[30px] shadow-bs1 w-full">
                            <iframe
                              frameBorder="0"
                              className="iiframe  h-[400px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-[416px] md:w-full"
                              width="100%"
                              height="824"
                              src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=f2a1890c-b981-11ee-9ddd-3f41531135b6"
                            ></iframe>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtGilroyMedium24"
                            >
                              Stafford St SW
                            </Text>
                          </div>


                          <div className="iiframee bg-indigo-50 flex flex-1 flex-col gap-[23px] h-[390px] md:h-auto items-center justify-start rounded-[30px] shadow-bs1 w-full">
                            <iframe
                              frameBorder="0"
                              className="iiframe h-[312px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] w-[416px] md:w-full"
                              width="100%"
                              height="768"
                              src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=b089a0e0-b701-11ee-9ddd-3f41531135b6"
                            ></iframe>
                            <Text
                              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                              size="txtGilroyMedium24"
                            >
                              Wingfoot PI
                            </Text>
                          </div>

                        </div>
                      </div>
                      <div className="iiframee bg-indigo-50 flex flex-col gap-[23px] md:h-[312px] h-[390px] sm:h-auto items-center justify-start rounded-[30px] shadow-bs1 w-auto md:w-full">

                        <iframe frameBorder="0" className="iiframe deds h-[312px] sm:h-auto object-cover rounded-tl-[30px] rounded-tr-[30px] md:w-[101%] w-[416px] sm:w-full juxtapose" width="100%" height="605" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=bb33f75c-b981-11ee-9ddd-3f41531135b6"></iframe>
                        <Text id="ehhhhhhhhhh"
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                          size="txtGilroyMedium24"
                        >
                          Holly Dr
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="what-we-do flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[35px] items-center justify-start w-auto md:w-full">
                  <Text
                    className=" fff md:text-4xl sm:text-[34px] text-[38px] text-black-900 text-center w-auto"
                    size="txtGilroyBold38"
                  >
                    Greater Atlanta Home Buyers, LLC
                  </Text>
                  <div className="flex flex-col items-start justify-center max-w-[1178px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="services md:gap-5 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                        <div className="bg-indigo-50 flex flex-1 flex-col gap-[17.47px] h-[261px] md:h-auto items-center justify-center sm:px-5 px-[34.93px] py-[19.96px] rounded-[20px] shadow-bs2 w-full">
                          <Img
                            className="h-[91px] md:h-auto object-cover sm:w-[83px] w-[90px]"
                            src="images/img_asset31.png"
                            alt="assetThirtyOne"
                          />
                          <div className="flex flex-col gap-[9.15px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900 text-center w-auto"
                              size="txtGilroyBold2162"
                            >
                              Fast Cash Offer
                            </Text>
                            <Text
                              className="text-[14.14px] text-black-900 text-center"
                              size="txtGilroyLight1414"
                            >
                              <>
                                Sell your house fast for a fair cash offer!
                                <br />
                                We can say this with confidence because <br />
                                our local investors have helped
                                <br />
                                hundreds of homeowners.
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 flex flex-1 flex-col gap-[21.63px] h-[261px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[44.08px] py-[19.96px] rounded-[20px] shadow-bs2 w-full">
                          <Img
                            className="h-[83px] md:h-auto object-cover w-[83px]"
                            src="images/img_asset23.png"
                            alt="assetTwentyThree"
                          />
                          <div className="flex flex-col gap-[9.15px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900 text-center w-auto"
                              size="txtGilroyBold2162"
                            >
                              Fast Closing
                            </Text>
                            <Text
                              className="text-[14.14px] text-black-900 text-center"
                              size="txtGilroyLight1414"
                            >
                              <>
                                Sell My House Fast does just that! <br />
                                we buy your house as fast as you need.
                                <br />
                                As cash home buyers, we can close
                                <br />
                                as quickly as 7 days!
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 flex flex-1 flex-col gap-[23.29px] h-[261px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[54.06px] py-[19.13px] rounded-[20px] shadow-bs2 w-full">
                          <Img
                            className="h-[90px] md:h-auto object-cover w-[90px]"
                            src="images/img_asset24.png"
                            alt="assetTwentyFour"
                          />
                          <div className="flex flex-col gap-[9.98px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[16.79px] md:text-[18.79px] text-[20.79px] text-black-900 text-center w-auto"
                              size="txtGilroyBold2079"
                            >
                              No Agent or iBuyer Fees
                            </Text>
                            <Text
                              className="text-[14.14px] text-black-900 text-center"
                              size="txtGilroyLight1414"
                            >
                              <>
                                Our cash offer for your house is what
                                <br />
                                you will receive at closing. We cover
                                <br />
                                all closing costs. No real estate
                                <br />
                                fees. No agent commission.
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 flex flex-1 flex-col gap-[26.62px] h-[261px] md:h-auto items-center justify-center sm:px-5 px-[38.26px] py-[19.13px] rounded-[20px] shadow-bs2 w-full">
                          <Img
                            className="h-[84px] md:h-auto object-cover w-[84px]"
                            src="images/img_asset25.png"
                            alt="assetTwentyFive"
                          />
                          <div className="flex flex-col gap-[9.15px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900 text-center w-auto"
                              size="txtGilroyBold2162"
                            >
                              No Home Repairs
                            </Text>
                            <Text
                              className="text-[14.14px] text-black-900 text-center"
                              size="txtGilroyLight1414"
                            >
                              <>
                                Sell your house without even picking up a<br />
                                paint brush. As cash buyers,
                                <br />
                                we take care of all the
                                <br />
                                renovations and cleaning.
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 flex flex-1 flex-col gap-[24.95px] h-[261px] md:h-auto items-center justify-center sm:px-5 px-[39.92px] py-[14.97px] rounded-[20px] shadow-bs2 w-full">
                          <Img
                            className="h-[84px] md:h-auto object-cover w-[84px]"
                            src="images/img_asset26.png"
                            alt="assetTwentySix"
                          />
                          <div className="flex flex-col gap-[9.15px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900 text-center w-auto"
                              size="txtGilroyBold2162"
                            >
                              Flexible Closing Time
                            </Text>
                            <Text
                              className="text-[14.14px] text-black-900 text-center"
                              size="txtGilroyLight1414"
                            >
                              <>
                                Sell My House Fast doesn’t just work with
                                <br />
                                homeowners on a tight schedule.
                                <br />
                                We accommodate any timeline.
                                <br />
                                You set the closing date!
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 flex flex-1 flex-col gap-[19.96px] h-[261px] md:h-auto items-center justify-center sm:px-5 px-[29.11px] py-[14.97px] rounded-[20px] shadow-bs2 w-full">
                          <Img
                            className="h-[94px] md:h-auto object-cover w-[77px] sm:w-[83px]"
                            src="images/img_asset27.png"
                            alt="assetTwentySeven"
                          />
                          <div className="flex flex-col gap-[9.15px] items-center justify-start w-auto">
                            <Text
                              className="sm:text-[17.63px] md:text-[19.63px] text-[21.63px] text-black-900 text-center w-auto"
                              size="txtGilroyBold2162"
                            >
                              Simple Sale Process
                            </Text>
                            <Text
                              className="text-[14.14px] text-black-900 text-center"
                              size="txtGilroyLight1414"
                            >
                              <>
                                Sell My House Fast runs on our simple selling
                                <br />
                                process. It’s the top reason sellers
                                <br />
                                choose us over an agent or fsbo! No
                                <br />
                                home listing. No headaches.
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testemonials bg-light_blue-800 flex flex-col items-start justify-start mt-[119px] pb-[55px] pt-10 md:px-10 sm:px-5 px-[68px] rounded-bl-[50px] rounded-tr-[50px] w-auto md:w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start w-auto md:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[37px] text-[41px] text-center text-indigo-50_01"
                      size="txtGilroyBold41"
                    >
                      <span className="md:text-[35px] sm:text-[33px] text-indigo-50_01 font-gilroybold text-[37px] font-normal">
                        <>
                          TESTEMONIALS
                          <br />
                        </>
                      </span>
                      <span className="text-indigo-50_01 font-gilroylight text-xl font-normal">
                        <>GoogleVerified Reviews</>
                      </span>
                    </Text>
                    <div className="flex md:flex-col flex-row font-gilroysemibold md:gap-10 gap-[61.9px] items-start justify-center w-auto md:w-full">
                      <div className="ra2y bg-teal-50 border-2 border-light_blue-800 border-solid flex flex-col gap-[4.42px] h-[193px] md:h-auto items-center justify-start md:left-[150px] sm:m-[] sm:ml-[46px] md:px-10 sm:px-5 px-[54.97px] py-[23.88px] md:relative rounded-bl-[25px] rounded-tr-[25px] w-[305px]">
                        <div className=" flex flex-col gap-[5px] items-center justify-start w-[83%] md:w-full">
                          <Text
                            className="sm:text-[18.11px] md:text-[20.11px] text-[22.11px] text-black-900 text-center w-auto"
                            size="txtGilroySemiBold2211"
                          >
                            Dionne Huskins
                          </Text>
                          <Img
                            className="h-[25px] w-[161px]"
                            src="images/img_group12.svg"
                            alt="groupTwelve"
                          />
                        </div>
                        <div className="flex flex-col font-gilroyregular items-center justify-start pt-[8.84px] w-auto">
                          <Text
                            className="text-[12.38px] text-black-900 text-center"
                            size="txtGilroyRegular1238"
                          >
                            <>
                              Dan has been amazing to work with.
                              <br />
                              If anyone is interested in selling their
                              <br />
                              home please reach out to him.
                              <br />
                              He made the process effortless and
                              <br />I am veryappreciative of him.
                            </>
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[61px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="ra2yy bg-teal-50 border-2 border-light_blue-800 border-solid flex flex-col gap-[4.42px] h-[193px] md:h-auto items-center justify-start md:left-[150px] sm:m-[] sm:ml-[46px] md:px-10 sm:px-5 px-[54.97px] py-[37.14px] md:relative rounded-[25px] w-[305px]">
                          <Text
                            className="sm:text-[18.11px] md:text-[20.11px] text-[22.11px] text-black-900 text-center w-auto"
                            size="txtGilroySemiBold2211"
                          >
                            Ashish Chandwadkar
                          </Text>
                          <Img
                            className="h-[25px] w-[161px]"
                            src="images/img_group12.svg"
                            alt="groupTwelve"
                          />
                          <div className="flex flex-col font-gilroyregular items-center justify-start pt-[8.84px] w-auto">
                            <Text
                              className="text-[14.15px] text-black-900 text-center"
                              size="txtGilroyRegular1415"
                            >
                              <>
                                Dan is a fabulous rehabber! <br />

                                His renovations are a work ofart  <br />

                                that reflect his commitment to quality!
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="ra2yyy bg-teal-50 border-2 border-light_blue-800 border-solid flex flex-col gap-[4.42px] h-[193px] md:h-auto items-center justify-start md:left-[150px] sm:m-[] sm:ml-[46px] sm:mr-[] sm:p-[] md:px-10 sm:px-5 px-[54.97px] py-[17.69px] sm:py-[17.69px] md:relative rounded-bl-[25px] rounded-tr-[25px] w-[305px]">
                          <Text
                            className="sm:text-[18.11px] md:text-[20.11px] text-[22.11px] text-black-900 text-center w-auto"
                            size="txtGilroySemiBold2211"
                          >
                            Fred Rais
                          </Text>
                          <Img
                            className="h-[25px] w-[161px]"
                            src="images/img_group12.svg"
                            alt="groupTwelve"
                          />
                          <div className="flex flex-col font-gilroyregular items-center justify-start pt-[8.84px] w-auto">
                            <Text
                              className="text-[11.5px] text-black-900 text-center"
                              size="txtGilroyRegular115"
                            >
                              <>
                                Had I not seen this property before the
                                <br />
                                renovation, I would not have been <br />
                                able to even picture what it would&#39;ve
                                <br />
                                looked liked before. Dan has done a <br />
                                marvelous job converting this property
                                <br />
                                to its lovely, modern looking version!
                              </>
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="contact flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start max-w-[1178px] mt-[120px] py-5 w-full">
                  <Img
                    className="md:flex-1 h-[421px] sm:h-auto object-cover w-[507px] md:w-full"
                    src="images/img_image1.png"
                    alt="imageOne"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[25px] items-start justify-start sm:m-[] sm:ml-auto w-auto sm:w-full">
                    <Text
                      className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                      size="txtGilroyBold45"
                    >
                      <>
                        Sell Your Home Fast
                        <br />
                        Without An Agent
                      </>
                    </Text>
                    <Text
                      className="text-[17px] text-gray-900"
                      size="txtGilroyLight17"
                    >
                      <>
                        Selling your house without an agent means
                        <br />
                        you don’t have to list your home or pay fees.
                        <br />
                        There is no waiting for banks and lenders
                        <br />
                        when you get a cash offer from us.
                        <br />
                        We cover all closing costs!
                      </>
                    </Text>
                    <Button
                      className="cursor-pointer font-gilroymedium leading-[normal] min-w-[184px] text-[17.89px] text-center tracking-[0.72px]"
                      shape="round"
                      color="light_blue_800"
                      size="sm"
                      variant="fill"
                      onClick={() => {
                        const section = document.querySelector('.go');
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      Get Started
                    </Button>

                    <Button
                      className="cursor-pointer font-gilroymedium leading-[normal] min-w-[183px] text-[17.89px] text-center tracking-[0.72px]"
                      shape="round"
                      color="light_blue_800"
                      size="sm"
                      variant="outline"
                      onClick={() => { window.location.href = 'tel:404-955-8541'; }}
                    >
                      Call Us
                    </Button>
                  </div>
                </div>
                <div className="footer bg-light_blue-800 flex flex-col items-center justify-start max-w-[1178px] mt-[117px] pb-[30px] pt-[70px] md:px-10 sm:px-5 px-[267px] rounded-tl-[25px] rounded-tr-[25px] shadow-bs3 w-full">
                  <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-auto md:w-full">
                    <div className="footer-iteam flex md:flex-col flex-row font-gilroyregular md:gap-10 gap-[117px] items-start justify-center w-auto md:w-full">
                      <Img
                        className="img-tp h-[145px] md:h-auto object-cover w-[243px] sm:w-full"
                        src="images/img_asset210.png"
                        alt="asset210"
                      />
                      <div className="flex flex-col gap-[21px] items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="text-container">
                            <Text
                              className="footer-tt text-[17px] text-white-A700"
                              size="txtGilroyRegular17"
                            >
                              <>
                                Greater Atlanta Home Buyers, LLC is a real estate
                                investment company
                                <br />
                                that buys homes throughout North Georgia. Many
                                sellers opt to do
                                <br />
                                business with us because we pay cash; can close
                                quickly; never
                                <br />
                                charge a commission; & we pay all normal closing
                                costs.
                                <br />
                                {/* <a style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleTermsClick}>
                                  terms and conditions
                                </a> */}
                              </>
                            </Text>
                            <Modal
                              title="Terms and Conditions"
                              open={modalVisible}
                              onCancel={handleModalCancel}
                              footer={null}
                              className="custom-modal"
                            >
                              <ul>
                                <li>You will need to add this page to your website and make sure it is publicly available.</li>
                                <li>Twilio, our telephony partner, maintains that consent can't be sold, shared, or transferred, so you must include ToS or a privacy policy stipulating that their data will not be shared.</li>
                                <li>Please reply to this email with the ToS URL so we can resubmit your application. Make sure they are easily findable from the Footer of your website homepage.</li>
                              </ul>
                            </Modal>
                          </div>
                        </div>
                        <div className="social-items flex sm:flex-col flex-row gap-[30px] items-center justify-start w-auto sm:w-full">
                          <Img
                            className="h-[43px] md:h-auto object-cover w-[43px]"
                            src="images/img_asset5.png"
                            alt="assetFive"
                          />
                          <Img
                            className="h-[43px] md:h-auto object-cover w-[43px]"
                            src="images/img_asset3.png"
                            alt="assetThree"
                          />
                          <Img
                            className="h-[43px] md:h-auto object-cover w-[43px]"
                            src="images/img_asset4.png"
                            alt="assetFour"
                          />
                          <div className="flex flex-col items-center justify-start pl-5 w-auto">
                            <a
                              href="tel:4049558541"
                              className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 underline w-auto"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Text>404-955-8541</Text>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="copy text-base text-center text-white-A700 w-auto"
                      size="txtGilroyLight16"
                    >
                      ©2022 Greater Atlanta Home Buyers, LLC
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
