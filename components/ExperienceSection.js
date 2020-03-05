import React from 'react';
import { Box, Card, Columns, Column, Container, Heading, Image, LayoutSet, Text } from 'fannypack';

export default function ExperienceSection() {
  return (
    <LayoutSet width="100%">
      <Container breakpoint="tablet">
        <Heading>Professional experience</Heading>
      </Container>
      <Container breakpoint="desktop" fontSize="200">
        <Columns>
          <Column>
            <Card>
              <LayoutSet spacing="major-1">
                <Box>
                  <Image src="/medipass-logo.svg" height="30px" alt="Medipass logo" />
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="300">
                    Lead frontend engineer
                  </Text>
                  <br />
                  <Text color="text200" fontSize="150">
                    DEC 2016 - PRESENT
                  </Text>
                </Box>
              </LayoutSet>
            </Card>
          </Column>
          <Column>
            <Card>
              <LayoutSet spacing="major-1">
                <Box>
                  <Image src="/localz.webp" height="30px" alt="Localz logo" />
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="300">
                    Frontend engineer
                  </Text>
                  <br />
                  <Text color="text200" fontSize="150">
                    AUG 2015 - DEC 2016
                  </Text>
                </Box>
              </LayoutSet>
            </Card>
          </Column>
          <Column>
            <Card>
              <LayoutSet spacing="major-1">
                <Box height="35px">
                  <Image src="/suncorp.png" height="40px" alt="Suncorp logo" />
                </Box>
                <Box>
                  <Text fontWeight="semibold" fontSize="300">
                    Frontend engineer
                  </Text>
                  <br />
                  <Text color="text200" fontSize="150">
                    DEC 2014 - FEB 2015
                  </Text>
                </Box>
              </LayoutSet>
            </Card>
          </Column>
        </Columns>
      </Container>
    </LayoutSet>
  );
}
