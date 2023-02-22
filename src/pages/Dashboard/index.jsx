import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-gray_50 border-[1px] border-gray_100 border-solid flex flex-col gap-[50px] items-start justify-start py-[34px] w-[100%]">
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
              <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start px-[18px] w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="md:ml-[0] ml-[16px] not-italic text-black_900 text-left tracking-[0.12px] w-[auto]"
                    variant="body2"
                  >
                    GENERAL
                  </Text>
                  <div className="flex flex-col font-outfit gap-[8px] items-center justify-start w-[100%]">
                    <div className="bg-gray_900_5f flex items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[55%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye"
                        />
                        <Text
                          className="font-medium text-gray_901 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="flex font-urbanist items-start justify-end p-[8px] w-[100%]">
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
                    <div className="flex font-urbanist items-start justify-end p-[8px] w-[100%]">
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
                          alt="clock"
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
                          alt="clock One"
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
              <div className="font-urbanist md:h-[243px] h-[258px] md:ml-[0] ml-[34px] relative w-[78%]">
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
              <div className="flex flex-row gap-[12px] items-center justify-between w-[27%]">
                <Img
                  src="images/img_ellipse_1020.png"
                  className="h-[52px] md:h-[auto] rounded-[50%] w-[52px]"
                  alt="Ellipse1020"
                />
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between md:w-[100%] w-[98%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[68%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="h-[250px] relative w-[100%]">
                  <Img
                    src="images/img_rectangle2040.png"
                    className="h-[250px] m-[auto] object-cover rounded-[15px] w-[100%]"
                    alt="Rectangle2040"
                  />
                  <div className="absolute bg-gradient  flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[30px] sm:px-[20px] rounded-[15px] w-[100%]">
                    <div className="flex flex-col gap-[33px] items-start justify-start mb-[19px] mt-[23px] md:w-[100%] w-[74%]">
                      <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                        <Text
                          className="not-italic text-left text-white_A700 tracking-[0.32px] w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Create and Sell Extraordinary NFTs
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700_a2 tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          The world’s first and largest digital marketplace for
                          crypto NFTs
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[20px] items-center justify-start md:w-[100%] w-[52%]">
                        <Button
                          className="cursor-pointer font-normal min-w-[120px] not-italic text-[14px] text-center text-gray_901 tracking-[0.14px] w-[auto]"
                          size="lg"
                          variant="FillWhiteA700"
                        >
                          Explore More
                        </Button>
                        <Button
                          className="cursor-pointer font-normal min-w-[120px] not-italic text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]"
                          size="lg"
                          variant="OutlineWhiteA700"
                        >
                          Sell Artwork
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mt-[43px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Trending Auction
                  </Text>
                  <Text
                    className="font-normal mt-[2px] not-italic text-gray_901 text-left tracking-[0.14px] w-[auto]"
                    variant="body1"
                  >
                    View All
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                    <div className="h-[140px] relative w-[100%]">
                      <Img
                        src="images/img_rectangle2044_140x222.png"
                        className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="Rectangle2044"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[4%] top-[6%] w-[51%]">
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
                            src="images/img_clock_white_a700.svg"
                            className=""
                            alt="clock Two"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[93%]">
                      <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Unfortable Facer
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Bane Riccardo
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[37px] items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                            variant="body3"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort"
                            />
                            <Text
                              className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              18,99 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-normal font-urbanist min-w-[88px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="FillGray901"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                    <div className="h-[140px] relative w-[100%]">
                      <Img
                        src="images/img_rectangle2044_11.png"
                        className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="Rectangle2044 One"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[4%] top-[6%] w-[51%]">
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
                            src="images/img_clock_white_a700.svg"
                            className=""
                            alt="clock Three"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[93%]">
                      <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
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
                      <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                            variant="body3"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort One"
                            />
                            <Text
                              className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              4,32 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-normal font-urbanist min-w-[88px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="FillGray901"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs1 w-[100%]">
                    <div className="h-[140px] relative w-[100%]">
                      <Img
                        src="images/img_rectangle2044_12.png"
                        className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="Rectangle2044 Two"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[4%] top-[6%] w-[51%]">
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
                            src="images/img_clock_white_a700.svg"
                            className=""
                            alt="clock Four"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Pile of Many Plates
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          By Ralphi Arness
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                            variant="body3"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort Two"
                            />
                            <Text
                              className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              4,32 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-normal font-urbanist min-w-[88px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                          variant="FillGray901"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mt-[33px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Top Collection
                  </Text>
                  <div className="flex items-center justify-start mt-[3px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_901 text-left tracking-[0.14px] w-[auto]"
                      variant="body1"
                    >
                      View All
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                      variant="body2"
                    >
                      Collection
                    </Text>
                    <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[66%]">
                      <Text
                        className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                        variant="body2"
                      >
                        Volume
                      </Text>
                      <Text
                        className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                        variant="body2"
                      >
                        24h %
                      </Text>
                      <Text
                        className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                        variant="body2"
                      >
                        Floor Price
                      </Text>
                      <Text
                        className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                        variant="body2"
                      >
                        Owners
                      </Text>
                      <Text
                        className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                        variant="body2"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[10px] grid items-center pr-[7px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-row gap-[14px] items-center justify-between md:w-[100%] w-[21%]">
                        <Img
                          src="images/img_ellipse1018.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Doodle Lucu
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            By Doodles
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:w-[100%] w-[65%]">
                        <div className="flex flex-row font-urbanist items-start justify-evenly sm:w-[100%] w-[11%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Three"
                          />
                          <Text
                            className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            14,32
                          </Text>
                        </div>
                        <Text
                          className="font-medium font-outfit sm:ml-[0] ml-[60px] text-green_600 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          + 20,4%
                        </Text>
                        <div className="flex flex-row font-urbanist items-start justify-center sm:ml-[0] ml-[53px] sm:w-[100%] w-[9%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One"
                          />
                          <Text
                            className="font-normal ml-[4px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            2,3
                          </Text>
                        </div>
                        <Text
                          className="font-normal font-urbanist sm:ml-[0] ml-[91px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          2,2K
                        </Text>
                        <Text
                          className="font-normal font-urbanist sm:ml-[0] ml-[86px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          18
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-row gap-[14px] items-center justify-between md:w-[100%] w-[24%]">
                        <Img
                          src="images/img_ellipse1018_42x42.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018 One"
                        />
                        <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Kimawi Genesis
                          </Text>
                          <Text
                            className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            By Kimawi - Japan
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row items-start justify-between md:w-[100%] w-[65%]">
                        <div className="flex flex-row font-urbanist items-start justify-evenly w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Four"
                          />
                          <Text
                            className="font-normal h-[17px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            6,11
                          </Text>
                        </div>
                        <Text
                          className="font-medium font-outfit text-left text-red_600 tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          - 18,2%
                        </Text>
                        <div className="flex flex-row font-urbanist items-start justify-center w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One One"
                          />
                          <Text
                            className="font-normal ml-[4px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            12,52
                          </Text>
                        </div>
                        <Text
                          className="font-normal font-urbanist not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          1,9K
                        </Text>
                        <Text
                          className="font-normal font-urbanist not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          21
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[43px] items-center justify-start outline outline-[0.5px] outline-gray_100 p-[26px] sm:px-[20px] md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[20px] items-center justify-start mt-[14px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Featured Creators
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_901 text-right tracking-[0.14px] w-[auto]"
                    variant="body1"
                  >
                    See All
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[12px] items-center justify-start p-[6px] rounded-[15px] shadow-bs2 w-[100%]">
                  <div className="flex flex-col relative w-[100%]">
                    <Img
                      src="images/img_rectangle2043.png"
                      className="h-[120px] mx-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="Rectangle2043"
                    />
                    <Img
                      src="images/img_ellipse1019.png"
                      className="h-[52px] mt-[-26px] mx-[auto] rounded-[50%] w-[52px] z-[1]"
                      alt="Ellipse1019"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] w-[94%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col font-urbanist items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[6px] items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-center tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            Murakami Flowers
                          </Text>
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[18px] w-[18px]"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="mt-[4px] not-italic text-center text-gray_500 tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          @mftmkkus
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-normal font-outfit min-w-[64px] my-[5px] not-italic text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                        shape="RoundedBorder14"
                        variant="Outline_1"
                      >
                        Follow
                      </Button>
                    </div>
                    <Line className="bg-gray_100 h-[1px] mt-[12px] w-[100%]" />
                    <Text
                      className="leading-[21.60px] mt-[11px] not-italic text-gray_500 text-left tracking-[0.12px] w-[100%]"
                      variant="body2"
                    >
                      Murakami.Flowers is a work in which artist Takashi
                      Murakami’s representative artwork.....
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start mb-[15px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_901 text-right tracking-[0.14px] w-[auto]"
                    variant="body1"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="flex-col gap-[20px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[62%]">
                      <Img
                        src="images/img_ellipse1018_1.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Two"
                      />
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Uzachi #4390
                        </Text>
                        <Text
                          className="not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          From Ragnarok Meta
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[27%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Five"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        2.15 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[60%]">
                      <Img
                        src="images/img_ellipse1018_2.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Three"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Doodles #3486
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          From Doodles
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[29%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Six"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        4.42 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[66%]">
                      <Img
                        src="images/img_ellipse1018_3.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Four"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Murakami #2766
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[27%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Seven"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        1.08 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[59%]">
                      <Img
                        src="images/img_ellipse1018_4.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Five"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Doodles #2761
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[26%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Eight"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        4.4 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[14px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[67%]">
                      <Img
                        src="images/img_ellipse1018_5.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Six"
                      />
                      <div className="flex flex-col items-start justify-end w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Peachy Puch#22
                        </Text>
                        <Text
                          className="mt-[3px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          From Mindblowonstudio
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[29%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Nine"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        5.62 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[33px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[61%]">
                      <Img
                        src="images/img_ellipse1018_6.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Seven"
                      />
                      <div className="flex flex-col items-center justify-start w-[auto]">
                        <Text
                          className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Gemmy #3723
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body2"
                        >
                          From GemmySolana
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Ten"
                      />
                      <Text
                        className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                        variant="body1"
                      >
                        5.32 ETH
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
