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
            WINNERS <span>&amp; nominations 2022</span>
          </h2>
        </BlurbCopy>

        <AccordionContainer>
          <Accordion iconPosition="right" iconSize={20}>
            <Accordion.Item label={<h5>The Stronger Together Award for Collaboration & Teamwork</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>
              <div className="eligibility">
              <strong className="acc-success">Mass Food Digital Team - Social follower and video view growth across mass food social channels</strong>
              </div>
              <p>- Rebecca Nittolo</p>
              <p>- Lindy Lawler</p>
              <p>- Nina Husaric</p>
              <p>- Julia Tanevski</p>
              <p>- Tyra Lawler-Cass</p>
              <p>- Marina Karris</p>
              <p>- Imogen Rafferty</p>
              <p>- Michelle Southan</p>
              <p>- Amira Georgy</p>

              <div className="eligibility">
              <strong className="acc-success">Team Roller - SuperVoter </strong>
              <p>(The Collaboration of the Year for the Election of the Century)</p>
              </div>

              <div className="eligibility">
              <strong className="acc-success">House of Wellness - Chemist Warehouse</strong>
              </div>

              <p>- Fiona Welsh</p>
              <p>- Michelle Rose</p>
              <p>- Laeta Crawford</p>
              <p>- Meisha Reynolds</p>
              <p>- Claire Burke</p>
              <p>- Erin Miller</p>
              <p>- Pascale Clearihan</p>
              <p>- Charlotte Brundrett</p>
              <p>- Bianca Carmona</p>
              <p>- Michael Owen</p>
              <p>- Jo Trzcinski</p>
              

              <div className="eligibility">
              <strong className="acc-success">Suddenly - The Good Guys</strong>
              </div>
               <p>- Mark Lymbers</p>
               <p>- Leesa Maher</p>
               <p>- Amanda Dardanis</p>
               <p>- Emma Schafer</p>
               <p>- Kate Salemme</p>
               <p>- Lydia Holt</p>
               <p>- Megan Moir</p>
               <p>- Tom Baker</p>
               <p>- Heather Jarvis</p>

              <div className="eligibility">
              <strong className="acc-success">WINNER</strong>
              <h7>Mass Food Digital Team</h7>
              </div>
              <div className="winner">
                <p>- Rebecca Nittolo</p>
                <p>- Lindy Lawler</p>
                <p>- Nina Husaric</p>
                <p>- Julia Tanevski</p>
                <p>- Tyra Lawler-Cass</p>
                <p>- Marina Karris</p>
                <p>- Imogen Rafferty</p>
                <p>- Michelle Southan</p>
                <p>- Amira Georgy</p>
              </div>
            </Accordion.Item>

            <Accordion.Item label={<h5>The Above & Beyond Award for Customer Success</h5>}>
             <strong className="acc-success">NOMINATIONS</strong>
              <div className="eligibility">
              <strong className="acc-success">Hyundai: Amy Marnie - Creative Content Director, NewsAMP, CCP</strong>
              </div>
              
              <div className="eligibility">
              <strong className="acc-success">KENO: Chris Connolly - Senior Art Director, CCP</strong>
              </div>

              <div className="eligibility">
              <strong className="acc-success">Destination NSW: Always one content program, Storyation:</strong>
              </div>

              <p>- Will Mumford</p>
              <p>- Andres Varela Lopez</p>
              <p>- Deb Cooke</p>
              <p>- Rachael Howlett </p>
              <p>- Elissa Kent</p>

              <div className="eligibility">
              <strong className="acc-success">MetLife: End-to-end content marketing support, Storyation:</strong>
              </div>

              <p>- Elissa Kent</p>
              <p>- Rachael Howlett</p>
              <p>- Will Mumford</p>
              <p>- Andres Lopez Varela</p>
              <p>- Josh Gliddon</p>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>KENO: Chris Connolly - Senior Art Director, CCP</h7>
              </div>
            </Accordion.Item>

            <Accordion.Item label={<h5>The Big Catch Award for New Business</h5>}>
            <strong className="acc-success">NOMINATIONS</strong>
             <div className="eligibility">
              <strong className="acc-success">Keno: &#8216;Play The Numbers You Know&#8217;</strong>
              </div> 

              <p>- Tara Duncan</p>
              <p>- Dan Smith</p>
              <p>- Chris Connolly</p>
              <p>- Sarah Mury</p>
              <p>- Julian Hartley</p>
              <p>- Alice Williams</p>
              <p>- Kate Calacouras</p>
              <p>- Amy Marnie</p>
              <p>- Nonie Campbell</p>
              <p>- Rowena Cortes</p>

              <div className="eligibility">
              <strong className="acc-success">Hello Fresh, Suddenly</strong>
              </div> 
              <p>- Alana Soste</p>
              <p>- Blake Greensmith</p>
              <p>- Anthony Macarounas</p>
              <p>- Roxeanne Brady</p>

              <div className="eligibility">
              <strong className="acc-success">The Good Guys, Suddenly</strong>
              </div>
              <p>- Mark Lymbers</p>
              <p>- Leesa Maher</p>
              <p>- Megan Moir</p>
              <p>- Lydia Holt</p>
              <p>- Amanda Dardanis</p>
              <p>- Kate Salemme</p>
              <p>- Emma Schafer</p>
              <p>- Heather Jarvis</p>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Hello Fresh, Suddenly</h7>
              </div>
              <div className="winner">
                <p>- Alana Soste</p>
                <p>- Blake Greensmith</p>
                <p>- Anthony Macarounas</p>
                <p>- Roxeanne Brady</p>
              </div>

              
            </Accordion.Item>
            <Accordion.Item label={<h5>The Blue Sky and Beyond Award for Innovation & Creativity</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>
              
              <div className="eligibility">
              <p className="acc-success">Aeirin Fabella, Newscast - Editorial Breach Player</p>
              </div>

              <div className="eligibility">
              <strong className="acc-success">The Great Australian Wildlife Collection, Roller - Diana Marco</strong>
              </div>
              <p>- Loren Swift</p>
              <p>- Sally Richmond</p>
              <p>- Richard Williams</p>
              <p>- Marion Kim</p>
              <p>- Feryx Lim</p>

              <div className="eligibility">
              <p className="acc-success">David Jones Content - An Account Management Team, Medium Rare</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Team Roller - SuperVoter (The Collaboration of the Year for the Election of the Century)</p>
              </div>
              
              <div className="eligibility">
              <p className="acc-success">Oliver Vickers-Price - Travel, Food Corp &#8216;Places&#8217; Bookable video project</p>
              </div>
              
              <div className="eligibility">
              <p className="acc-success">David Jones Content - An Account Management Team, Medium Rare</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Oliver Vickers-Price - Travel, Food Corp &#8216;Places&#8217; Bookable video project</h7>
              </div>

            </Accordion.Item>


            <Accordion.Item label={<h5>The MVP Award For Initiative & Tenacity</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <div className="eligibility">
              <p className="acc-success">Shannon Hollis, Head of Commercial, Audio</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Jane Scott, Creative Content Director, NewsAMP, CCP</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Eva Chown, Head of Operations, CCP</p>
              </div>
              
              <div className="eligibility">
              <p className="acc-success">Qantas team including content, sales and Rare Creative, Medium Rare</p>
              </div>
              
              <div className="eligibility">
              <p className="acc-success">Anthony Macarounas, Senior Art Director, NewsAMP, CCP</p>
              </div>
              
              <div className="eligibility">
              <p className="acc-success">Heather Jarvis, Head of Account Services, Suddenly</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Eva Chown, Head of Operations, CCP</h7>
              </div>

            </Accordion.Item>
            <Accordion.Item label={<h5>The Storytelling Award for Audience Engagement</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <div className="eligibility">
              <p className="acc-success">Stephen Nadin - Tourism and Events Queensland - Days Like This Campaign</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Andrea Thiis-Evenson, NewsCast - True Crime Australia</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Michelle Southan - A new content model within Food Media Brands</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Eva Chown, Head of Operations, CCP</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Andrea Thiis-Evenson, NewsCast - True Crime Australia</h7>
              </div>

            </Accordion.Item>
            <Accordion.Item label={<h5>The 360 Award for Business Unit Of The Year</h5>}>
              
              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Medium Rare Content Agency</h7>
              </div>

            </Accordion.Item>
            <Accordion.Item label={<h5>TREDNSETTER OF THE YEAR AWARD</h5>}>
              <strong className="acc-success">NOMINATIONS</strong>

              <div className="eligibility">
              <p className="acc-success">Shannon Hollis - Head of Commercial, Audio</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Jane Scott - Creative Content Director, NewsAMP, CCP</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Eva Chown - Head of Operations, CCP</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Heather Jarvis - Head of Account Services, Suddenly</p>
              </div>

              <div className="eligibility">
              <p className="acc-success">Rebecca Nittolo - Digital Editor - taste.com.au and Australia&#8216;s Best Recipes, Food Corp</p>
              </div>

              <div className="eligibility">
               <strong className="acc-success">WINNER</strong>
                <h7>Heather Jarvis - Head of Account Services, Suddenly</h7>
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
