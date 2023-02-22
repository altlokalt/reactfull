import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  ReactTable,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images";
import { createColumnHelper } from "@tanstack/react-table";

const MyProfileHistoryPage = () => {
  const tableData = React.useRef([
    {
      rowitemlist: "From Mindblowonstudio",
      rowstatus: "Actived",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "2.62 ETH",
      rowrecentoffer: "2.14 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Marvin McKinney",
      rowstatus: "On Going",
      rowopenprice: "11.70 ETH",
      rowyouroffer: "17.84 ETH",
      rowrecentoffer: "11.99 ETH",
      rowtimeleft: "18h 18m 2s",
    },
    {
      rowitemlist: "From Angelina Cruzz",
      rowstatus: "Ended",
      rowopenprice: "6.48 ETH",
      rowyouroffer: "14.81 ETH",
      rowrecentoffer: "12.81 ETH",
      rowtimeleft: "12h 1m 24s",
    },
    {
      rowitemlist: "From Ralphi Arness",
      rowstatus: "Ended",
      rowopenprice: "17.84 ETH",
      rowyouroffer: "17.99 ETH",
      rowrecentoffer: "17.84 ETH",
      rowtimeleft: "28h 20m 5s",
    },
    {
      rowitemlist: "From Annette Black",
      rowstatus: "On Going",
      rowopenprice: "8.99 ETH",
      rowyouroffer: "11.70 ETH",
      rowrecentoffer: "10.22 ETH",
      rowtimeleft: "17h 6m 3s",
    },
    {
      rowitemlist: "From Jacob Jones",
      rowstatus: "Success",
      rowopenprice: "14.81 ETH",
      rowyouroffer: "16.48 ETH",
      rowrecentoffer: "12.32 ETH",
      rowtimeleft: "3h 37m 22s",
    },
    {
      rowitemlist: "From Eleanor Pena",
      rowstatus: "On Going",
      rowopenprice: "5.22 ETH",
      rowyouroffer: "8.99 ETH",
      rowrecentoffer: "6.70 ETH",
      rowtimeleft: "34h 36m 6s",
    },
    {
      rowitemlist: "From Brooklyn Simmons",
      rowstatus: "On Going",
      rowopenprice: "3.99 ETH",
      rowyouroffer: "5.22 ETH",
      rowrecentoffer: "4.84 ETH",
      rowtimeleft: "3h 4m 3 s",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowitemlist", {
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
        <div className="flex md:flex-1 items-center justify-start min-w-[322px] md:w-[100%] w-[31%]">
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
    columnHelper.accessor("rowstatus", {
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
        <div className="flex md:flex-1 items-center justify-start min-w-[141px] md:w-[100%] w-[14%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Status
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowopenprice", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort"
          />
          <Text
            className="font-normal mr-[67px] mt-[9px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[170px] pr-[2px] py-[2px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal mb-[22px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Open Price
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowyouroffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-start">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[34px] w-[16px]"
            alt="sort One"
          />
          <Text
            className="font-normal mb-[24px] mt-[34px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[166px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Your Offer
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowrecentoffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-start">
          <Img
            src="images/img_sort.svg"
            className="h-[16px] mt-[34px] w-[16px]"
            alt="sort Two"
          />
          <Text
            className="font-normal mb-[24px] mt-[34px] not-italic text-black_900 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[174px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[17%]">
          <Text
            className="font-normal not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body1"
          >
            Recent Offer
          </Text>
        </div>
      ),
    }),
    columnHelper.accessor("rowtimeleft", {
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
        <div className="flex md:flex-1 items-center justify-start min-w-[97px] pb-[26px] sm:pr-[20px] pr-[26px] w-[10%] md:w-[100%]">
          <Text
            className="font-normal not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
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
                    <div className="bg-gray_900_5f flex font-outfit items-start justify-end p-[8px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[41%]">
                        <Img
                          src="images/img_clock_gray_901.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-medium mt-[2px] text-gray_901 text-left tracking-[0.18px] w-[auto]"
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
        <div className="flex flex-1 flex-col gap-[39px] items-center justify-end md:px-[20px] w-[100%]">
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
          <div className="flex flex-col font-urbanist items-start justify-start md:w-[100%] w-[95%]">
            <Text
              className="not-italic text-black_900 text-left tracking-[0.34px] w-[auto]"
              as="h1"
              variant="h1"
            >
              History
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[17px] w-[100%]">
              <Button
                className="flex items-center justify-center text-center"
                leftIcon={
                  <Img
                    src="images/img_refresh.svg"
                    className="mr-[10px] text-center"
                    alt="refresh"
                  />
                }
                shape="RoundedBorder14"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_900 text-left tracking-[0.16px]">
                  All
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
                className="flex items-center justify-center ml-[497px] sm:ml-[0] text-center"
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
            <div className="overflow-auto bg-white_A700 mt-[30px] outline outline-[0.5px] outline-gray_100 rounded-[15px] shadow-bs1 w-[100%]">
              <ReactTable
                columns={column}
                data={tableData.current}
                rowClass={""}
                headerClass="border-b-[1px] border-gray_100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileHistoryPage;
