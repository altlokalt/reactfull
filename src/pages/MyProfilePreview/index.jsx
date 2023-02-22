import React from "react";

import { Img, Text, Button, Input, SelectBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const MyProfilePreviewPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-gray_50 border-[1px] border-gray_100 border-solid flex flex-col items-start justify-start py-[34px] w-[100%]">
              <div className="flex flex-row gap-[14px] items-center justify-start md:ml-[0] ml-[34px] md:w-[100%] w-[59%]">
                <Img
                  src="images/img_ellipse1015.png"
                  className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                  alt="Ellipse1015"
                />
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-black_900 text-left tracking-[0.18px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Kevin Cranel
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                    variant="body1"
                  >
                    @kecrane
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] px-[18px] w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[16px] not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body2"
                  >
                    GENERAL
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[46%]">
                        <Img
                          src="images/img_car.svg"
                          className="h-[24px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[44%]">
                        <Img
                          src="images/img_settings.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[16px] not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body2"
                  >
                    MARKETPLACE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Market
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Active Bid
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_clock_gray_500.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Saved
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[16px] not-italic text-gray_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body2"
                  >
                    MY PROFILE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_user_gray_500.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[4px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_computer.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Wallet
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] pr-[4px] md:w-[100%] w-[41%]">
                        <Img
                          src="images/img_clock_gray_500_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-urbanist h-[258px] md:h-[292px] md:ml-[0] ml-[34px] mt-[49px] relative w-[78%]">
                <div className="absolute bg-gray_901 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                    size="lgIcn"
                    variant="icbOutlineGray5003f"
                  >
                    <Img
                      src="images/img_question.svg"
                      className="h-[24px]"
                      alt="question"
                    />
                  </Button>
                  <Text
                    className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Help Center
                  </Text>
                  <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_400 tracking-[0.14px]"
                      variant="body1"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[206px] not-italic text-[14px] text-center text-gray_901 tracking-[0.14px] w-[auto]"
                      size="lg"
                      variant="FillWhiteA700"
                    >
                      Go To Help Center
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[34px] sm:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left tracking-[0.14px] w-[100%]"
              wrapClassName="flex md:mt-[0] md:w-[100%] my-[2px] sm:mt-[0] sm:w-[100%] w-[45%]"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer my-[auto] mx-[16px]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#93989a"
                    className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="mdSrc"
            ></Input>
            <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-[0] my-[2px] md:w-[100%] w-[32%]">
              <Button
                className="flex items-center justify-center text-center"
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="mr-[10px] text-center"
                    alt="sort"
                  />
                }
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_900 text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button
                className="flex h-[52px] items-center justify-center w-[52px]"
                shape="icbCircleBorder25"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_lock.svg"
                  className="h-[24px]"
                  alt="lock"
                />
              </Button>
              <SelectBox
                className="sm:w-[100%] w-[27%]"
                placeholderClassName=""
                name="user Two"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_ellipse_1020.png"
                    className="h-[52px] mr-[35px] w-[52px] rounded-[50%]"
                    alt="Ellipse 1020"
                  />
                }
              ></SelectBox>
            </div>
          </div>
          <div className="flex flex-col font-urbanist relative w-[100%]">
            <div className="h-[260px] mx-[auto] w-[100%]">
              <Img
                src="images/img_rectangle2057_260x1138.png"
                className="h-[260px] m-[auto] object-cover w-[100%]"
                alt="Rectangle2057"
              />
              <Img
                src="images/img_checkmark_white_a700.svg"
                className="absolute bottom-[13%] h-[36px] right-[3%] rounded-[50%] w-[36px]"
                alt="checkmark"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[-84px] mx-[auto] w-[95%] z-[1]">
              <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[268px] p-[18px] rounded-[15px] shadow-bs1 md:w-[100%] w-[23%]">
                <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[87%]">
                  <Img
                    src="images/img_ellipse1022_100x100.png"
                    className="h-[100px] md:h-[auto] rounded-[50%] w-[100px]"
                    alt="Ellipse1022"
                  />
                  <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                    <Text
                      className="not-italic text-black_900 text-left tracking-[0.20px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Eleanor Pena
                    </Text>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-[100%]">
                      <Text
                        className="mt-[2px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                        variant="body2"
                      >
                        0x864784f44ajf84bskw4w...
                      </Text>
                      <Img
                        src="images/img_copy.svg"
                        className="h-[18px] w-[18px]"
                        alt="copy"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[9px] w-[100%]">
                  <Text
                    className="font-normal leading-[25.20px] not-italic text-center text-gray_500 tracking-[0.14px] w-[100%]"
                    variant="body1"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-[6px] items-center justify-start mt-[21px] py-[2px] md:w-[100%] w-[83%]">
                    <Img
                      src="images/img_globe_black_900.svg"
                      className="h-[18px] w-[18px]"
                      alt="globe"
                    />
                    <Text
                      className="not-italic text-black_900 text-left tracking-[0.12px] w-[auto]"
                      variant="body2"
                    >
                      weloveart.com/kevincranel
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between mt-[22px] md:w-[100%] w-[87%]">
                    <Button
                      className="cursor-pointer font-normal min-w-[88px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                      variant="FillGray901"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      className="flex h-[32px] items-center justify-center w-[32px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_arrowup.svg"
                        className="h-[18px]"
                        alt="arrowup"
                      />
                    </Button>
                    <Button
                      className="flex h-[32px] items-center justify-center w-[32px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_camera_black_900.svg"
                        className="h-[18px]"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <Line className="bg-gray_100 h-[1px] mt-[24px] w-[100%]" />
                  <Text
                    className="font-normal mt-[27px] not-italic text-center text-gray_500 tracking-[0.14px] w-[auto]"
                    variant="body1"
                  >
                    Joined November 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start md:mt-[0] mt-[118px] md:w-[100%] w-[75%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[44%]">
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_grid.svg"
                          className="mr-[10px] text-center"
                          alt="grid"
                        />
                      }
                      shape="CircleBorder18"
                      size="md"
                      variant="FillBlack900"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700 tracking-[0.14px]">
                        Created
                      </div>
                    </Button>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] w-[auto]">
                      <Img
                        src="images/img_folder.svg"
                        className="h-[20px] ml-[4px] w-[20px]"
                        alt="folder"
                      />
                      <Text
                        className="font-normal mr-[4px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        Collection
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[7px] w-[auto]">
                      <Img
                        src="images/img_clock_gray_500_24x24.svg"
                        className="h-[20px] ml-[4px] w-[20px]"
                        alt="clock Three"
                      />
                      <Text
                        className="font-normal mr-[5px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-gray_500 text-gray_500 text-left tracking-[0.12px] w-[100%]"
                    wrapClassName="flex sm:w-[100%] w-[26%]"
                    name="SearchInput One"
                    placeholder="Search by name"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer my-[auto] mx-[14px]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#93989a"
                          className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder8"
                    size="smSrc"
                    variant="srcFillGray50"
                  ></Input>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_193x240.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                          <Button
                            className="cursor-pointer font-normal min-w-[75px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                            shape="RoundedBorder14"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Diehard BATTERY-SILVER
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Ralph Edwards
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_13.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 One"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                          <Button
                            className="cursor-pointer font-normal min-w-[75px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                            shape="RoundedBorder14"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[8px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Dayco Serpentine Belt
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Marvin McKinney
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_14.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Two"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                          <Button
                            className="cursor-pointer font-normal min-w-[75px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                            shape="RoundedBorder14"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[8px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bosch Spark Plug
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Guy Hawkins
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_15.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Three"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                          <Button
                            className="cursor-pointer font-normal min-w-[75px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                            shape="RoundedBorder14"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fram Oil Filter
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Jerome Bell
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_16.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Four"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                          <Button
                            className="cursor-pointer font-normal min-w-[75px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                            shape="RoundedBorder14"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Four"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fram Oil Filter
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Eleanor Pena
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_17.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Five"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                          <Button
                            className="cursor-pointer font-normal min-w-[75px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                            shape="RoundedBorder14"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className=""
                              alt="favorite Five"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Mad Ballot Holder
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Angelina Cruzz
                        </Text>
                      </div>
                    </div>
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

export default MyProfilePreviewPage;
