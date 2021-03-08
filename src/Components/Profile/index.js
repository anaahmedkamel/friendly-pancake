import React, { Component } from 'react'
import { ProfileSkills , Profiles , ProfileList , ProfileItem , Span , SpanWeb , Skills , SkillsDesc , Bar , Title , Perc , Parent , ParentSpan,
SpanSp1 , SpanSp2  , ProfileTitle , SkillsTitle , ProfileTitleSpan , SkillsTitleSpan } from  "./style.js"

class Profile extends Component {

  render() {
    return (
            <ProfileSkills>
            <div className="container">
                <Profiles>
                    <ProfileTitle > <ProfileTitleSpan> My </ProfileTitleSpan> Profile </ProfileTitle>
                    <ProfileList >
                        <ProfileItem>
                            <Span>Name</Span>
                            Ahmed kamel
                        </ProfileItem>

                        <ProfileItem >
                            <Span>Birthday</Span>
                            6/10/1995
                        </ProfileItem>

                        <ProfileItem >
                            <Span>Address</Span>
                            Haram
                        </ProfileItem>

                        <ProfileItem >
                            <Span> Phone </Span>
                            01120290297
                        </ProfileItem>

                        <ProfileItem >
                            <Span>Email</Span>
                            ahmedd45673@gmail.com
                        </ProfileItem>

                        <ProfileItem >
                            <Span>Website</Span>
                            <SpanWeb > www.google.com </SpanWeb>
                        </ProfileItem>
                    </ProfileList>

                </Profiles>
                
                <Skills>
                    <SkillsTitle > Some <SkillsTitleSpan> skills </SkillsTitleSpan> </SkillsTitle>
                    <SkillsDesc >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <Bar >
                        <Title > html </Title>
                        <Perc  > 100% </Perc>
                        <Parent >
                            <SpanSp1 ></SpanSp1>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title> CSS </Title>
                        <Perc > 90% </Perc>
                        <Parent>
                            <SpanSp2 > </SpanSp2>
                        </Parent>
                    </Bar>
                    
                    <Bar >
                        <Title > js </Title>
                        <Perc > 80% </Perc>
                        <Parent>
                            <ParentSpan > </ParentSpan>
                        </Parent>
                    </Bar>
                </Skills>
                
            </div>
        </ProfileSkills>
    )
  }
}
export default Profile
