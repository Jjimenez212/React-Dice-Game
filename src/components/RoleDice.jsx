import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const RoleDice = ({ roleDice, currentDice}) => {
  

    
  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
      <img src={`../../public/images/dice/dice_${currentDice}.png`} alt="dice 1" />
    </div>
    <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice{
    cursor: pointer;
  }
  p{
    font-size: 24px;
  }
`

