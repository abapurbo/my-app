import axios from "axios";
import React from "react";
const instance = axios.create({
    baseURL: 'https://my-app-server-jjsu.vercel.app'
});

export default function useAxios() {
    return instance
}
