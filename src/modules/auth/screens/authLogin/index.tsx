import React, { useMemo } from 'react';
import { PadderContainer, BaseContainer } from '@components-containers/index';
import { TextL } from '@components-derivatives/text';

export default function AuthLogin() {
  const RenderMain = useMemo(() => {
    return (
      <BaseContainer title="Auth Login">
        <PadderContainer>
          <TextL>Auth Login</TextL>
        </PadderContainer>
      </BaseContainer>
    );
  }, []);

  return RenderMain;
}
