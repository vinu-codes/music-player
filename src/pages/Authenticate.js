import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react'

import { redirect } from 'react-router-dom';

import axios from 'axios'

export const Authenticate = () => {
  useSpotify(() => redirect('/dashboard'));
  return (
    <div>
      <h1>Authenticating...</h1>
    </div>
  )
}