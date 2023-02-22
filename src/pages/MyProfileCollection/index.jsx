import React from "react";

import { Img, Text, Button, Input, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";

const MyProfileCollectionPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
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
                  <div className="flex flex-col font-outfit gap-[8px] items-center justify-start w-[100%]">
                    <div className="bg-gray_900_5f flex items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_user_gray_901_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-medium text-gray_901 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                    <div className="flex font-urbanist items-start justify-start p-[10px] w-[100%]">
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
                    <div className="flex font-urbanist items-start justify-end p-[8px] w-[100%]">
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
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-[20px] w-[100%]">
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
          <div className="flex flex-col font-urbanist items-start justify-start md:w-[100%] w-[94%]">
            <Text
              className="not-italic text-black_900 text-left tracking-[0.34px] w-[auto]"
              as="h1"
              variant="h1"
            >
              Collection
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[22px] w-[100%]">
              <Button
                className="flex items-center justify-center text-center"
                leftIcon={
                  <Img
                    src="images/img_user_black_900.svg"
                    className="mr-[10px] text-center"
                    alt="user"
                  />
                }
                shape="RoundedBorder14"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_900 text-left tracking-[0.16px]">
                  Category
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_signal.svg"
                    className="mr-[10px] text-center"
                    alt="signal"
                  />
                }
                shape="RoundedBorder14"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_900 text-left tracking-[0.16px]">
                  Collection
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_clock_black_900.svg"
                    className="mr-[10px] text-center"
                    alt="clock"
                  />
                }
                shape="RoundedBorder14"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_900 text-left tracking-[0.16px]">
                  Price Range
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[447px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_menu.svg"
                    className="mr-[10px] text-center"
                    alt="menu"
                  />
                }
                shape="RoundedBorder14"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_900 text-left tracking-[0.16px]">
                  Filter & Sort
                </div>
              </Button>
            </div>
            <div className="flex items-center justify-start mt-[30px] w-[100%]">
              <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
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
    </>
  );
};

export default MyProfileCollectionPage;
