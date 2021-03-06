// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassTwoToneSvg}></AntdIcon>;
};

CompassTwoTone.displayName = 'CompassTwoTone';
CompassTwoTone.inheritAttrs = false;
export default CompassTwoTone;