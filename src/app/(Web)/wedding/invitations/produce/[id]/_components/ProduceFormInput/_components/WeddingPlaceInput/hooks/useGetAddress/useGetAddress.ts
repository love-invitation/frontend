import { useEffect, useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useFormContext } from 'react-hook-form';

import { GeoPosition } from '@/types/originType';

import { UseGetAddressProps } from './useGetAddress.type';

const useGetAddress = ({ showModal }: UseGetAddressProps) => {
  const [center, setCenter] = useState<GeoPosition | null>(null);
  const [geocoder, setGeocoder] = useState<kakao.maps.services.Geocoder | null>(null);
  const [alertMessage, setAlertMessage] = useState('');
  const { setValue, watch } = useFormContext();

  useEffect(() => {
    kakao.maps.load(() => {
      const geo = new kakao.maps.services.Geocoder();
      setGeocoder(geo);
    });
  }, []);

  const open = useDaumPostcodePopup();

  const handleClickAddress = () => {
    open({
      onComplete: (data: Address) => {
        setValue('place.address', data.roadAddress);

        if (!geocoder) {
          showModal();
          setAlertMessage('지도를 불러오는 과정에 \n 문제가 발생하였습니다.');
          return;
        }

        geocoder.addressSearch(data.address, (result, state) => {
          if (state === kakao.maps.services.Status.OK) {
            const lat = Number(result[0].y);
            const lng = Number(result[0].x);

            setValue('place.latitude', lat);
            setValue('place.longitude', lng);
            setCenter({
              lat,
              lng,
            });
          }
        });
      },

      onError: () => {
        showModal();
        setAlertMessage('주소 입력 과정에서 \n 문제가 발생하였습니다.');
      },
    });
  };

  return {
    center,
    handleClickAddress,
    address: watch('place.address'),
    alertMessage,
  };
};

export default useGetAddress;
