import React from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import bp from "@/styles/breakpoints";

import { Accordion } from "@mantine/core";

export default function AccordionBlock() {
  return (
    <Section>
      

      <Container>
        <BlurbCopy>
          <p>
            It’s your opportunity to nominate your favourite teams and individuals across 7 categories celebrating; innovation, collaboration, business growth and delivering on our purpose to inform,
            advocate and inspire all Australians.
          </p>
          <h2>
            AWARD <span>categories</span>
          </h2>
        </BlurbCopy>

        <AccordionContainer>
          <Accordion iconPosition="right" iconSize={20}>
            <Accordion.Item label={<h5>The Stronger Together Award for Collaboration & Teamwork</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- High level of collaboration and engagement</p>
              <p>- Accountability (ability to demonstrate shared effort and results)</p>
              <p>- Diversity in thinking</p>
              <p>- Strategic outcome</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>

            <Accordion.Item label={<h5>The Above & Beyond Award for Customer Success</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Responses that solve client needs</p>
              <p>- CSAT score - % increase</p>
              <p>- Proactive partnerships (anticipating and adapting changes in the market)</p>
              <p>- On-time/efficiency in delivery</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>

            <Accordion.Item label={<h5>The Big Catch Award for New Business</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Identification of growth opportunities</p>
              <p>- Leadership and ownership of plans</p>
              <p>- % of opportunities converted</p>
              <p>- Relationship management and engagement </p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>
            <Accordion.Item label={<h5>The Blue Sky and Beyond Award for Innovation & Creativity</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Excellence in content and creative</p>
              <p>- Originality of approach and storytelling </p>
              <p>- Innovative design and delivery</p>
              <p>- Richness and depth of content</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>
            <Accordion.Item label={<h5>The MVP Award For Initiative & Tenacity</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- High level of initiative and ownership</p>
              <p>- Impact of work</p>
              <p>- Level of endeavour, courage and tenacity</p>
              <p>- Depth of knowledge and expertise</p>

              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>
            </Accordion.Item>
            <Accordion.Item label={<h5>The Storytelling Award for Audience Engagement</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- Demonstrable subscription results or audience engagement</p>
              <p>- Innovation and originality</p>
              <p>- Business success</p>
              <p>- Level of storytelling skills</p>
              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>{" "}
            </Accordion.Item>
            <Accordion.Item label={<h5>The 360 Award for Business Unit Of The Year</h5>}>
              <strong className="acc-success">Measures of success</strong>
              <p>- % of growth in revenue</p>
              <p>- Margin %</p>
              <p>- Achievement of cost budget</p>
              <p>- Outstanding business success</p>
              <p>- Excellence and impact of work/content</p>
              <p>- Demonstrable improvement over 12 months</p>
              <div className="eligibility">
                <strong>Eligibility</strong>
                <p>All permanent commercial content roles are eligible, excluding GM’s</p>
              </div>{" "}
            </Accordion.Item>
          </Accordion>
        </AccordionContainer>
      </Container>


      <Container>
        <BlurbCopy>
          <h2>
            WINNERS <span>&amp; nominations 2023</span>
          </h2>
        </BlurbCopy>

        <AccordionContainer>
          <Accordion iconPosition="right" iconSize={20}>
            <Accordion.Item label={<h5>The Stronger Together Award for Collaboration & Teamwork</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>
              <div className="eligibility">
              <strong className="acc-success">Ziploc-it-in | ommercial Content Production</strong>
              </div>
              <p>- Brooke Lewis</p>
              <p>- Kristie Walden</p>
              <p>- Anthony Macarounas</p>
              <p>- Benjamin Squires</p>


              <div className="eligibility">
              <strong className="acc-success">Data, Insights & The Art of Collaboration Mass Food</strong>
              </div>

               <p>- Laura Simpson</p>
               <p>- Brodee Myers-Cooke</p>
               <p>- Daniela Bertollo</p>
               <p>- Michelle Southan</p>
               <p>- Harmony Southern</p>
               <p>- Rebecca Nitollo</p>
               <p>- Jade Dunn</p>
               <p>- Rosalie Gordon</p>
               <p>- Julia Tanevski</p>
               <p>- Marina Karris</p>
               <p>- Alex McDivitt</p>
               <p>- Amira Georgy</p>
               <p>- Elisa Pietrantonio</p>
               <p>- Sam Yates</p>
               <p>- Holly Gerrard</p>


              <div className="eligibility">
              <strong className="acc-success">Client Innovation Hub Medium Rare</strong>
              </div>

              <p>- Jo McKay</p>
              <p>- Teagan Barr</p>
              <p>- Sarah Macrae</p>
              <p>- Richie Kenzie</p>
              <p>- Lucy Bortolazzo</p>
              <p>- Amber Manto</p>
              <p>- Steph Ryan</p>
              <p>- Jessie Aylmore</p>
              <p>- Rhett White</p>
              <p>- Sarah Bush</p>
              <p>- Tania Turner</p>


              <div className="eligibility">
              <strong className="acc-success">WINNER</strong>
                <h7>Ziploc-it-in | ommercial Content Production</h7>
              </div>
              <div className="winner">
              <p>- Brooke Lewis</p>
              <p>- Kristie Walden</p>
              <p>- Anthony Macarounas</p>
              <p>- Benjamin Squires</p>
              </div>

            </Accordion.Item>


            <Accordion.Item label={<h5>The Big Catch Award for New Business</h5>}>
            <strong className="acc-success">NOMINATIONS</strong>
             <div className="eligibility">
              <strong className="acc-success">The Brighter Side of Banking — Commonwealth Bank Team &amp; Client Innovation Hub</strong>
              </div> 

               <p>- Fiorella Di Santo</p>
               <p>- Jo McKay</p>
               <p>- Teagan Barr</p>
               <p>- Kirsten Galliott</p>
               <p>- Brooke Le Poer Trench</p>
               <p>- Christie Brewster</p>


              <div className="eligibility">
              <strong className="acc-success">Reckitts | Finish Dishwashing Tablets FoodCorp</strong>
              </div> 

              <p>- Adelaide Johnson</p>
              <p>- Rebecca Nittolo</p>
              <p>- Michelle Southan</p>
              <p>- Daniela Bertollo</p>
              <p>- Laura Simpson</p>
              <p>- Amy Marie</p>
              <p>- Alice Williams</p>
              <p>- Monica Dombrovskis</p>
              <p>- Marina Karris</p>
              <p>- Jade Dunn</p>
              <p>- Alexandra McDivvit</p>
              <p>- Brodee Myers-Cooke</p>
              <p>- Cate Smith</p>


              <div className="eligibility">
              <strong className="acc-success">The Best Gift Group, Storyation</strong>
              </div>

              <p>- Andres Lopez Varela</p>
              <p>- Simone Aquilina</p>
              <p>- Rachel Howlett</p>
              <p>- Isabella Pirintji</p>


              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>The Brighter Side of Banking — Commonwealth Bank Team &amp; Client Innovation Hub</h7>
              </div>
              <div className="winner">
               <p>- Fiorella Di Santo</p>
               <p>- Jo McKay</p>
               <p>- Teagan Barr</p>
               <p>- Kirsten Galliott</p>
               <p>- Brooke Le Poer Trench</p>
               <p>- Christie Brewster</p>
              </div>

              
            </Accordion.Item>
            <Accordion.Item label={<h5>The Blue Sky and Beyond Award for Innovation & Creativity</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>
              
              <div className="eligibility">
              <p className="acc-success">Treasury Wine Estate | Visual Domain - New Business</p>
              </div>
               <p>- Jess Lund</p>
               <p>- Natasha Millist</p>



              <div className="eligibility">
              <strong className="acc-success">Beyond Blue / Be You educator content program | Storyation</strong>
              </div>

              <p>- Elissa Kent</p>
              <p>- Will Mumford</p>
              <p>- Kristy Hosking</p>
              <p>- Isabella Pirintji</p>

              <div className="eligibility">
              <strong className="acc-success">Qantas Platinum One | Medium Rare</strong>
              </div>

              <p>- Kirsten Galliott</p>
              <p>- Genevra Leek</p>
              <p>- Tony Rice</p>
              <p>- Faith Campbell</p>
              <p>- Natalie Reilly</p>
              <p>- Rosie Bruce</p>
              <p>- Kate Timms</p>
              <p>- Nick Clark</p>
              <p>- Liz Hachem</p>
              <p>- Sandra Bridekirk</p>
              <p>- Pip Duffy</p>
              <p>- Nick Hadley</p>
              <p>- Christina Rae</p>
              <p>- Bridget de Maine</p> 
              <p>- Anneliese Beard</p>


              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Qantas Platinum One | Medium Rare</h7>
              </div>
              <div className="winner">
               <p>- Kirsten Galliott</p>
              <p>- Genevra Leek</p>
              <p>- Tony Rice</p>
              <p>- Faith Campbell</p>
              <p>- Natalie Reilly</p>
              <p>- Rosie Bruce</p>
              <p>- Kate Timms</p>
              <p>- Nick Clark</p>
              <p>- Liz Hachem</p>
              <p>- Sandra Bridekirk</p>
              <p>- Pip Duffy</p>
              <p>- Nick Hadley</p>
              <p>- Christina Rae</p>
              <p>- Bridget de Maine</p> 
              <p>- Anneliese Beard</p>
              </div>


            </Accordion.Item>

            <Accordion.Item label={<h5>The Commercial Impact Award</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>
              
              <div className="eligibility">
              <p className="acc-success">Queen’s Wharf Brisbane | News 360 Commercial, CCP</p>
              </div>
               <p>- Stephen Nadin</p>
               <p>- Sava Ratukula</p>


              <div className="eligibility">
              <strong className="acc-success">American Express delicious. Month Out 2023 | Food</strong>
              </div>

              <p>- Krysia Bonkowski</p>
              <p>- John Hannan</p>
              <p>- Hayley Incoll</p>
              <p>- Kerrie McCallum</p>
              <p>- Adelaide Johnson</p>
              <p>- Rachael Delalande</p>
              <p>- Corinne Parkes</p>
              <p>- Erina Starkey</p>
              <p>- Alison Turner</p>
              <p>- Isabella Nilsson</p>


              <div className="eligibility">
              <strong className="acc-success">Destination Canada: Discover Canada’s Icons | Rare Creative, Medium Rare</strong>
              </div>

              <p>- Paulette Parisi</p>
              <p>- Jane Schofield</p>
              <p>- Jessica Manson</p>
              <p>- Mark Brandon</p>


              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>American Express delicious. Month Out 2023 | Food</h7>
              </div>
              <div className="winner">

              <p>- Krysia Bonkowski</p>
              <p>- John Hannan</p>
              <p>- Hayley Incoll</p>
              <p>- Kerrie McCallum</p>
              <p>- Adelaide Johnson</p>
              <p>- Rachael Delalande</p>
              <p>- Corinne Parkes</p>
              <p>- Erina Starkey</p>
              <p>- Alison Turner</p>
              <p>- Isabella Nilsson</p>

              </div>


            </Accordion.Item>



            <Accordion.Item label={<h5>The My Word Award for Written Craftmanship</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <div className="eligibility">
              <p className="acc-success">Kate Calacouras, CCP - Gold Coast City Council</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Nina Young, Newscast - I Catch Killers podcast</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Carey Swan, Medium Rare - Subeditor Supreme</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Nina Young, Newscast - I Catch Killers podcast</h7>
              </div>

            </Accordion.Item>


            <Accordion.Item label={<h5>The Visual Excellence Award for Best Use of Creative Direction or Design</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <div className="eligibility">
              <p className="acc-success">Emily Hicks, CCP - The Good Guys Apple TVC</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Patrik Angyal, Roller - D_Coded 2023</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Harmony Southern, Taste - The creative reinvention of taste.com.au</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Patrik Angyal, Roller - D_Coded 2023</h7>
              </div>

            </Accordion.Item>


            <Accordion.Item label={<h5>The Unsung Hero Award</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <p>- Jessica Larmer-Barallon, Medium Rare</p>
              <p>- Jade Dunn, Food, Health &amp; Travel</p>
              <p>- Del Fordham, Audio</p>
              <p>- Tabby Wilson, Audio</p>
              <p>- Elissa Kent, Storyation</p>
              <p>- Pascale Clearihan, Suddenly</p>
              <p>- James Fyfe Smith, Roller</p>
              <p>- Rochelle Rudd, Medium Rare</p>
              <p>- Robyn Payne, Visual Domain</p>
              <p>- Dan Morley, Medium Rare</p>
              <p>- Shannon Hollis, Audio</p>
              <p>- Chelsea Hardiman, Audio</p>
              <p>- Brooke Lewis, CCP</p>
              <p>- Alana Soste, Suddenly</p>
              <p>- Ben Squires, CCP</p>
              <p>- Rowena Ryan, Food, Health &amp; Travel</p>
              <p>- Tara Stuart, Food, Health &amp; Travel</p>
              <p>- Leslie To, Medium Rare</p>
              <p>- Jessie Lindner, Medium Rare</p>
              <p>- Victoria Keitel, Medium Rare</p>
              <p>- Elizabeth Hooper, Medium Rare</p>
              <p>- Emily Pidgeon, Audio</p>
              <p>- Sahil Sharma, Food, Health &amp; Travel</p>
              <p>- Mila Rojano, Medium Rare</p>
              <p>- Rachel Badham, Medium Rare</p>
              <p>- Erin Miller, Suddenly South</p>
              <p>- Aiden Adrian, Food, Health &amp; Travel</p>
              <p>- Marion Kim, Roller</p>
              <p>- Andrea Thiis-Evensen, Audio</p>
              <p>- Mark Lymbers, CCP</p>
              <p>- Melanie Yun, CCP</p>
              <p>- Sarah Abbasi, CCP</p>


              <div className="eligibility">
               <strong className="acc-success">WINNERS</strong>
                <h7>Jade Dunn, Food, Health &amp; Travel</h7>
                <h7>James Fyfe-Smith, Roller</h7>
                <h7>Tabby Wilson, NewsCast</h7>
              </div>

            </Accordion.Item>


            <Accordion.Item label={<h5>The 360 Award for Business Unit of the Year</h5>}>
              
              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>The Travel Network</h7>
              </div>

            </Accordion.Item>
            <Accordion.Item label={<h5>TRENDSETTER OF THE YEAR AWARD</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <div className="eligibility">
              <p className="acc-success">Brooke Lewis - Creative Director, NewsAMP CCP</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">John Hannan - Digital Director, Delicious, Escape &amp; B&amp;S Food, Health &amp; Travel</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Jo McKay - Head of Strategy &amp; Client Innovation Medium Rare</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Tabby Wilson - Audio Producer, Commercial Integration NewsCast</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Tori Lattin - Lead Art Director, Roller</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Alana Soste - Senior Account Service Director, Content Marketing, Suddenly</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Katrina Goh - Executive Director, Stockhead</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Elissa Kent - Client Service Manager, Storyation</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Jess Lund - Director of Photography, Visual Domain</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Jo McKay - Head of Strategy &amp; Client Innovation, Medium Rare</h7>
              </div>

            </Accordion.Item>

          </Accordion>
        </AccordionContainer>
      </Container>
    </Section>
  );
}

const AccordionContainer = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 760px;

  .mantine-Accordion {
    &-control {
      padding-top: 0;
      padding-bottom: 0;
    }

    &-content {
      font-family: "Montserrat", sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 0.875rem;
      color: var(--color-font);
      p {
        margin: 0;
        line-height: 1.57;
      }
      .eligibility,
      .prize {
        padding-top: 18px;
      }
      .acc-success {
        padding-bottom: 4px;
        position: relative;
        display: block;
      }
    }
  }
`;

const BlurbCopy = styled.div`
  position: relative;
  color: var(--color-font);
  font-size: 1.25rem;
  text-align: center;
  margin: 0 auto;
  max-width: 900px;
  margin-top: 95px;

  line-height: 1.3;
  p {
    padding-bottom: 85px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 80px;
      height: 1px;
      transform: translateX(-50%);
      background-color: var(--color-font);
    }
  }

  h2 {
    margin-top: 64px;
    margin-bottom: 40px;
  }
`;
