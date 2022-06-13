import React from "react";
import styled from "styled-components";

/**
 * 
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article ...) ``
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  border-radius: 8px;
`;

const CardImg = styled.img`
  
`;

const Card = () => {
  return (
    <StyledCard>
      <div>
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/18247514/media/a567a2e47559db2d934d78f898ce78af.png?compress=1&resize=768x576&vertical=top"
          alt=""
        />
      </div>
      <div>
        <div>
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/12119655/media/e49fb1570ce6c02a8bd0643f960579b0.png?compress=1&resize=768x576&vertical=top"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div>256</div>
        </div>
        <div>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
