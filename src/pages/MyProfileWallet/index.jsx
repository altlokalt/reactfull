import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  List,
  CheckBox,
  ReactTable,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images";
import { createColumnHelper } from "@tanstack/react-table";

const MyProfileWalletPage = () => {
  const tableData1 = React.useRef([
    {
      rowitemlist: "From Mindblowonstudio",
      rowstatus: "Actived",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Marvin McKinney",
      rowstatus: "On Going",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Ralphi Arness",
      rowstatus: "On Going",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Annette Black",
      rowstatus: "Ended",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Eleanor Pena",
      rowstatus: "Actived",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "5.62 ETH",
      rowtimeleft: "1h 19m",
    },
  ]);
  const columnHelper1 = createColumnHelper();
  const column1 = [
    columnHelper1.accessor("rowitemlist", {
      cell: (info) => (
        <div className="flex flex-row gap-[14px] items-start justify-start p-[12px]">
          <Img
            src="images/img_ellipse1018_5.png"
            className="h-[42px] md:h-[auto] ml-[11px] mt-[9px] rounded-[50%] w-[42px]"
            alt="Ellipse1018"
          />
          <div className="flex flex-col items-start justify-end mt-[10px] w-[auto]">
            <Text
              className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
              as="p"
              variant="h6"
            >
              Peachy Puch#22
            </Text>
            <Text
              className="mt-[3px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
              as="p"
              variant="body2"
            >
              {info?.getValue()}
            </Text>
          </div>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[266px] md:w-[100%] w-[36%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Item List
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowstatus", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_900 text-left tracking-[0.14px]"
          as="p"
          variant="body1"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[111px] md:w-[100%] w-[15%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_500 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Status
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowopenprice", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort"
          />
          <Text
            className="font-normal mr-[38px] mt-[9px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[141px] p-[2px] md:w-[100%] w-[20%]">
          <Text
            className="font-normal mb-[22px] not-italic text-gray_500 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Open Price
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowyouroffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort One"
          />
          <Text
            className="font-normal mr-[34px] mt-[9px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[137px] pb-[2px] px-[2px] md:w-[100%] w-[19%]">
          <Text
            className="font-normal mb-[24px] not-italic text-gray_500 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Your Offer
          </Text>
        </div>
      ),
    }),
    columnHelper1.accessor("rowtimeleft", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_900 text-left tracking-[0.14px]"
          as="p"
          variant="body1"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[85px] md:w-[100%] w-[12%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_500 text-right tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Time Left
          </Text>
        </div>
      ),
    }),
  ];

  const [inputvalue, setInputvalue] = React.useState("");

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
                    <div className="bg-gray_900_5f flex font-outfit items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_wallet3.svg"
                          className="h-[24px] w-[24px]"
                          alt="walletThree"
                        />
                        <Text
                          className="font-medium text-gray_901 text-left tracking-[0.18px] w-[auto]"
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
          <div className="flex md:flex-col flex-row font-urbanist gap-[34px] items-center justify-between md:w-[100%] w-[98%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[68%]">
              <Text
                className="not-italic text-black_900 text-left tracking-[0.34px] w-[auto]"
                as="h1"
                variant="h1"
              >
                Wallet
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[32px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 items-start justify-start outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-[15px] shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[91%]">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465.png"
                        className="h-[22px]"
                        alt="Frame162465"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-end md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal mt-[5px] not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Spending
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $432,215.32
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-end justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-green_600 text-left tracking-[0.14px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="+2.4%"
                          name="TwentyFour"
                        ></CheckBox>
                        <div className="bg-gray_500 h-[4px] my-[10px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal mt-[6px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-start justify-start outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-[15px] shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[89%]">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_901.png"
                        className="h-[22px]"
                        alt="Frame162465 One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[14px] items-start justify-end md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Income
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $21,579.22
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-end justify-between w-[100%]">
                        <div className="flex flex-row gap-[6px] items-start justify-start py-[3px] w-[auto]">
                          <Img
                            src="images/img_trendingup.svg"
                            className="h-[18px] w-[18px]"
                            alt="trendingup"
                          />
                          <Text
                            className="font-normal not-italic text-left text-red_600 tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            -2.32
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-[4px] my-[10px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal mt-[6px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-start justify-start outline outline-[0.5px] outline-gray_100 p-[23px] sm:px-[20px] rounded-[15px] shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start mb-[2px] md:w-[100%] w-[90%]">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_901_42x42.png"
                        className="h-[22px]"
                        alt="Frame162465 Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-end md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal mt-[5px] not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Saving
                        </Text>
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $68,483.16
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-end justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-green_600 text-left tracking-[0.14px]"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="+2.4%"
                          name="TwentyFour One"
                        ></CheckBox>
                        <div className="bg-gray_500 h-[4px] my-[10px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal mt-[6px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col font-outfit gap-[27px] items-center justify-start mt-[32px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left tracking-[0.24px] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Recent Activity
                  </Text>
                  <div className="flex font-urbanist items-center justify-start mt-[4px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_901 text-left tracking-[0.14px] w-[auto]"
                      variant="body1"
                    >
                      View All
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex font-urbanist items-center justify-end outline outline-[0.5px] outline-gray_100 py-[24px] rounded-[15px] shadow-bs1 w-[100%]">
                  <div className="overflow-auto w-[100%]">
                    <ReactTable
                      columns={column1}
                      data={tableData1.current}
                      rowClass={""}
                      headerClass="border-b-[1px] border-gray_100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex items-center justify-start outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] md:w-[100%] w-[30%]">
              <div className="flex flex-col items-center justify-start mb-[16px] w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-[0.18px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Wallet
                    </Text>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start rounded-[15px] w-[100%]">
                    <div className="h-[150px] relative w-[100%]">
                      <Img
                        src="images/img_group33968.png"
                        className="h-[150px] m-[auto] object-cover w-[100%]"
                        alt="group33968"
                      />
                      <div className="absolute bottom-[9%] flex flex-row gap-[26px] inset-x-[0] items-end justify-between mx-[auto] w-[89%]">
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            Local Banking Card
                          </Text>
                          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[2px] mt-[29px] py-[3px] md:w-[100%] w-[99%]">
                            <Img
                              src="images/img_.svg"
                              className="h-[5px] w-[auto]"
                              alt="Two"
                            />
                            <Img
                              src="images/img_.svg"
                              className="h-[5px] w-[auto]"
                              alt="Three"
                            />
                            <Img
                              src="images/img_.svg"
                              className="h-[5px] w-[auto]"
                              alt="Four"
                            />
                            <Text
                              className="font-normal not-italic text-left text-white_A700_a2 tracking-[0.14px] w-[auto]"
                              variant="body1"
                            >
                              3982
                            </Text>
                          </div>
                          <Text
                            className="font-normal md:ml-[0] ml-[2px] mt-[28px] not-italic text-left text-white_A700 tracking-[0.14px] w-[auto]"
                            variant="body1"
                          >
                            Kevin Cranel
                          </Text>
                        </div>
                        <Img
                          src="images/img_visalogo.svg"
                          className="h-[16px] mt-[100px] w-[auto]"
                          alt="visalogo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray_100 h-[1px] mt-[24px] w-[100%]" />
                <div className="flex flex-col gap-[31px] items-center justify-start mt-[26px] w-[100%]">
                  <div className="flex flex-col gap-[7px] items-end justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-[0.18px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Your Balance
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $185,424.52
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-normal min-w-[228px] not-italic text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]"
                      size="lg"
                      variant="FillGray901"
                    >
                      Add New Card
                    </Button>
                    <Button
                      className="flex h-[42px] items-center justify-center w-[42px]"
                      shape="icbRoundedBorder8"
                      size="mdIcn"
                      variant="icbFillGray90067"
                    >
                      <Img
                        src="images/img_topup.png"
                        className="h-[24px]"
                        alt="TopUp"
                      />
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_100 h-[1px] mt-[24px] w-[100%]" />
                <div className="flex flex-col gap-[18px] items-start justify-start mt-[31px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 text-left tracking-[0.18px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Transaction History
                  </Text>
                  <List
                    className="flex-col gap-[24px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[64%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon.png"
                            className="h-[24px]"
                            alt="Icon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Exchange to ETH
                          </Text>
                          <Text
                            className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            Today at 4:13 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Five"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          2.22 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[58%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-[24px]"
                            alt="Frame162471"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            Today at 4:23 PM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[26%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Six"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          1.32 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row gap-[19px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[66%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon_gray_901.png"
                            className="h-[24px]"
                            alt="Icon One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 5:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Seven"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          5.56 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row gap-[23px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[66%]">
                        <Img
                          src="images/img_icon_gray_50.png"
                          className="h-[42px] md:h-[auto] object-cover w-[42px]"
                          alt="Icon Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[27%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Eight"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          2.21 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row gap-[36px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[60%]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-[24px]"
                            alt="Frame162471 One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-black_900 text-left tracking-[0.16px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[28%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Nine"
                        />
                        <Text
                          className="font-normal not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
                          variant="body1"
                        >
                          2.32 ETH
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileWalletPage;
