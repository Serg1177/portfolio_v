import React, {useState} from 'react';
import './aboutMe.scss'
import {Title} from "../../commons/title/Title";
import {Tab} from "../../commons/tabs/tab/Tab";
import {TabPanel} from "../../commons/tabs/tabpanel/TabPanel";
import aboutImg from './../../assets/aboutMe/foto4.jpeg'

export const AboutMe = () => {

  const initialTabs = [
    {id: 1, title: "Main Skills", selected: true},
    {id: 2, title: "Skills", selected: false},
    {id: 3, title: "Experience", selected: false},
    {id: 4, title: "Education", selected: false},
  ]
  const [tabs, setTabs] = useState(initialTabs)
  const changeSelectTabCallback = (id, selected) => {
    const newTabs = tabs.map(tab => tab.id === id ? {
      ...tab,
      selected: selected
    } : {...tab, selected: false})
    setTabs(newTabs)
  }

  return (
    <div id="about" className="about">
      <div className="about_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img src={aboutImg} alt="photo"/>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="inner">
                <Title title={"About Me"}
                       subtitle={"I’d describe myself as a goal-oriented and hardworking person with experience in creating\n" +
                       "SPA, using" +
                       "React(JS/TS), Redux, HTML & CSS. Now " +
                       "I am improving my skills in this " +
                       "direction and expanding them with " +
                       "new technologies. In the future, I would like to become a full-stack developer."}/>
                <div className="row section_info">
                  <div className="col-lg-12">
                    <ul className="tabs">
                      {tabs.map(tab => {
                        return (
                          <Tab
                            key={`${tab.id}-${tab.title}`}
                            id={tab.id}
                            title={tab.title}
                            selected={tab.selected}
                            changeSelectTabCallback={changeSelectTabCallback}
                          />
                        )
                      })}
                    </ul>
                  </div>
                  <TabPanel tabs={tabs}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};