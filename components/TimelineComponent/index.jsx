import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork, MdSchool, MdStars } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "../../data/timelineData";
import {
  Image,
  Heading,
  Text,
  HStack,
  Box,
  Badge,
  chakra,
  useColorMode,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
export const TimelineComponent = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const { colorMode } = useColorMode();
  const lineColors = {
    light: "#15161a",
    dark: "white",
  };

  const bgColors = {
    dark: "#242323",
    light: "#faf7f7",
  };

  const typeIcons = {
    school: <MdSchool />,
    work: <MdWork />,
  };

  return (
    <>
      <VerticalTimeline
        lineColor={lineColors[colorMode]}
        animate={width > 992 ? true : false}
      >
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdStars />}
        />
        {timelineData
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                date={item.date}
                contentStyle={{
                  background: bgColors[colorMode],
                  color: lineColors[colorMode],
                }}
                contentArrowStyle={{
                  borderRight: "7px solid " + bgColors[colorMode],
                }}
                iconStyle={{ background: "#242323", color: "#fff" }}
                icon={typeIcons[item.type]}
              >
                <Box d="flex" alignItems="center">
                  <Image
                    d="inline"
                    src={item.img}
                    alt={item.headline}
                    boxSize="60px"
                    objectFit="cover"
                    mr="2"
                  />
                  <Box alignSelf="center">
                    <Heading
                      fontSize="xl"
                      fontWeight="bold"
                      color="white"
                      className="vertical-timeline-element-title"
                    >
                      <chakra.span color={lineColors[colorMode]}>
                        {item.headline}
                      </chakra.span>
                    </Heading>
                  </Box>
                </Box>

                <Text color={lineColors[colorMode]}>{item.desc}</Text>

                <SimpleGrid mt={4} columns={3} spacing={2} justify="flex-start">
                  {item.skills?.map((skill, index) => {
                    return (
                      <Box key={index}>
                        <Badge colorScheme="teal">{skill}</Badge>
                      </Box>
                    );
                  })}
                </SimpleGrid>
              </VerticalTimelineElement>
            );
          })}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(255, 157, 0)", color: "#fff" }}
          icon={<FaBaby />}
        />
      </VerticalTimeline>
    </>
  );
};

/*
STORED:
    {
        "headline": "Stevens Business Research Program",
        "type": "school",
        "desc": "I'll be participating in the Stevens Business Research Program, where I'll be researching about the relationship between risk and reward of businesses and their success.",
        "date": "June 2022",
        "img": "https://i.imgur.com/yNph2fg.png",
        "alt": "Stevens Institute of Technology Logo"
    }
*/
