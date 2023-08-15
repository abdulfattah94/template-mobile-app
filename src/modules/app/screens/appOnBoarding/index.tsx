import React, { useMemo } from 'react';
import { PadderContainer, BaseContainer } from '@components-containers/index';
import { TextL } from '@components-derivatives/text';
import _ from 'lodash';

export default function AppOnBoarding() {
  const RenderMain = useMemo(() => {
    return (
      <BaseContainer title="App On Boarding">
        <PadderContainer>
          <TextL>On Boarding</TextL>
        </PadderContainer>
      </BaseContainer>
    );
  }, []);

  return RenderMain;
}
