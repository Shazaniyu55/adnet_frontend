import axios from "axios";

export const getUserInfo = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/personal-info/${userId}`,
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const isUserVerified = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.SMNK_URL}api/personal-info/verified`,
        data: { userId },
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getUserverification = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.SMNK_URL}api/personal-info/verification`,
        data: { userId },
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getSWExtraDetails = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/sw/extra/${userId}`,
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getUserDp = async (userId) => {
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/users/dp/${userId}`,
      });
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
      const error = err;
      return error;
    }
  }
};

export const getUserName = async (userId) => {
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/profile/name/${userId}`,
      });
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
      const error = err;
      return error;
    }
  }
};

export const getUserProfile = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/profile/${userId}`,
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getUserRating = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.SMNK_URL}api/users/rating`,
        data: { userId },
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getJobsDoneByUser = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/job/done/${userId}`,
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getClientJobHistory = async (userId) => {
  let data;
  let error;
  if (userId) {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.SMNK_URL}api/job/client/${userId}`,
      });
      data = await res.data;
    } catch (err) {
      console.log(err);
      error = err;
    }
  } else {
    return { data, error };
  }
  return { data, error };
};

export const getCompanyProfile = (userId) => {
  const res = async () => {
    try {
      const res = await axios(
        `${process.env.SMNK_URL}api/company-profile/${userId}`
      );
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  return res;
};

export const getUserExp = async (userId) => {
  let data;
  let error;
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.SMNK_URL}api/sw-dashboard/experience/${userId}`,
    });
    data = await res.data;
  } catch (err) {
    error = err;
  }
  return { data, error };
};

export const getUserServices = async (userId) => {
  let data;
  let error;
  try {
    const res = await axios({
      method: "POST",
      url: `${process.env.SMNK_URL}api/sw-dashboard/service/${userId}`,
    });
    data = await res.data;
  } catch (err) {
    error = err;
  }
  return { data, error };
};

export const getUserBankDetails = (userId) => {
  const res = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.SMNK_URL}api/sw-dashboard/bank-details/${userId}`,
      });
      const data = await res.data;
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  return res;
};

export const userJSON = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user !== "undefined") {
        return user;
      }
    }
  }
  return {};
};

export const swExtraJSON = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const swExtraStr = localStorage.getItem("swExtra");
    if (swExtraStr) {
      const swExtra = JSON.parse(swExtraStr);
      if (swExtra !== "undefined") {
        return swExtra;
      }
    }
  }
  return {};
};

export const infoJSON = () => {
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const infoStr = localStorage.getItem("info");
    if (infoStr) {
      const info = JSON.parse(infoStr);
      return info;
    }
  }
};
