import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import { useId } from "preact/hooks";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function Alert({ alerts = [], interval = 5 }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <Slider class="bg-badge gap-6 scrollbar-none">
        {alerts.map((alert) => (
          <Text
            class="flex justify-center items-center w-screen h-[38px]"
            variant="caption"
            tone="default"
          >
            <Icon id="Truck" width={50} height={20} />
            {alert}
            <Icon id="Truck" width={50} height={20} />
          </Text>
        ))}
      </Slider>

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
