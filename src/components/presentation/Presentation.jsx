import React from 'react'
import './presentation.css'
import pierre2 from '../../assets/pierre2.jpg'
import {AiFillGithub} from 'react-icons/ai';

function Presentation() {
  return (
    <>
    <div className='presentation-page' id='presentation'>
        <div className='underline-title'>
        <h2 className='presentation-title'><span>02.</span>Présentation</h2>
        </div>
      <div className='presentation-container'>
        
        <div className="case">
            <div>
                <AiFillGithub/>
                <h2>Experience</h2>
                <p>2 ans en freelance</p>
            </div>
            <div>
                <AiFillGithub/>
                <h2>titre</h2>
                <p>paragraphe</p>
            </div>
            <div>
                <AiFillGithub/>
                <h2>titre</h2>
                <p>paragraphe</p>
            </div>
        </div>

        <div className="presentation-text">
            <h2 className='qsj-title'>Qui-suis je ?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur amet minus, ratione perspiciatis, doloremque pariatur voluptatibus autem odio rerum magni nostrum. Porro expedita quam aperiam ullam laborum maiores illum sequi.</p>

            <h2 className='recherche-title'>Ce que je recherche ?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur amet minus, ratione perspiciatis, doloremque pariatur voluptatibus autem odio rerum magni nostrum. Porro expedita quam aperiam ullam laborum maiores illum sequi.</p>

            <h2 className='recherche-title'>Ce que je recherche ?</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur amet minus, ratione perspiciatis, doloremque pariatur voluptatibus autem odio rerum magni nostrum. Porro expedita quam aperiam ullam laborum maiores illum sequi.</p>
        </div>

        <div className="presentation-img">
            <img src={pierre2} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Presentation
