'use client'
import { fetchStoreDeliveryCharges, fetchStoreDeliveryChargesLocally, fetchStorePaymentMethods, fetchStorePaymentMethodsLocally, setUser } from '@/app/store/slices/auth';
import { fetchProducts } from '@/app/store/slices/product';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function ApiCalls() {
     const dispatch = useDispatch();
     
      useEffect(() => {
        dispatch(setUser());
        dispatch(fetchProducts());
        dispatch(fetchStoreDeliveryChargesLocally());
        dispatch(fetchStorePaymentMethodsLocally());
        dispatch(fetchStorePaymentMethods());
        dispatch(fetchStoreDeliveryCharges());
      }, []);
  return (
    <>
    </>
  )
}
