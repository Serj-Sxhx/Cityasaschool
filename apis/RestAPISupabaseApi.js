import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const addProfileDataPOST = (
  Constants,
  { birthday, email, firstName, gender, lastName, userId, username }
) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles`, {
    body: JSON.stringify({
      user_id: userId,
      firstName: firstName,
      lastName: lastName,
      username: username,
      birthday: birthday,
      gender: gender,
      email: email,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const addAPortfolioPostPOST = (
  Constants,
  {
    collabs,
    desc,
    externalURL,
    from_date,
    imagesArray,
    isPublic,
    title,
    to_date,
    type,
    userId,
  }
) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts`, {
    body: JSON.stringify({
      title: title,
      description: desc,
      user_id: userId,
      from_date: from_date,
      to_date: to_date,
      external_url: externalURL,
      is_public: isPublic,
      Type: type,
      imagesArray: imagesArray,
      collaborators: collabs,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useAddAPortfolioPostPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addAPortfolioPostPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Posts', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Post');
        queryClient.invalidateQueries('Posts');
      },
    }
  );
};

export const deletePostDELETE = (Constants, { id }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?id=eq.${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'DELETE',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useDeletePostDELETE = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => deletePostDELETE(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Posts', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Post');
        queryClient.invalidateQueries('Posts');
      },
    }
  );
};

export const discoverPostsGET = Constants =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?order=created_at.desc`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useDiscoverPostsGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?order=created_at.desc`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );
};

export const FetchDiscoverPostsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?order=created_at.desc`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchDiscoverPosts: refetch });
};

export const discoverPostsConnectedGET = Constants =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?select=*,profiles(username,profile_picture)`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useDiscoverPostsConnectedGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?select=*,profiles(username,profile_picture)`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );
};

export const FetchDiscoverPostsConnectedGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?select=*,profiles(username,profile_picture)`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchDiscoverPostsConnected: refetch,
  });
};

export const getCollaboratorsListGET = (Constants, { userId }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?select=username,user_id,profile_picture&user_id=neq.${
      userId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetCollaboratorsListGET = ({ userId }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?select=username,user_id,profile_picture&user_id=neq.${
      userId ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );
};

export const FetchGetCollaboratorsListGET = ({
  children,
  onData = () => {},
  refetchInterval,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?select=username,user_id,profile_picture&user_id=neq.${
      userId ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetCollaboratorsList: refetch,
  });
};

export const getProfileDataGET = (Constants, { uuid }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?"user_id"=eq.${
      uuid ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetProfileDataGET = ({ uuid }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?"user_id"=eq.${
      uuid ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );
};

export const FetchGetProfileDataGET = ({
  children,
  onData = () => {},
  refetchInterval,
  uuid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?"user_id"=eq.${
      uuid ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetProfileData: refetch });
};

export const getSInglePostGET = (Constants, { id }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?id=eq.${
      id ?? ''
    }&select=*`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetSInglePostGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['Post', args], () => getSInglePostGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['Posts']),
  });
};

export const FetchGetSInglePostGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetSInglePostGET(
    { id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetSInglePost: refetch });
};

export const loginPOST = (Constants, { signupEmail, signupPassword }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: signupEmail, password: signupPassword }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const portfolioPostsGET = (Constants, { uuid }) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?"user_id"=eq.${
      uuid ?? ''
    }&order=created_at.desc`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const usePortfolioPostsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Posts', args], () => portfolioPostsGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchPortfolioPostsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  uuid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = usePortfolioPostsGET(
    { uuid },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchPortfolioPosts: refetch });
};

export const resetPasswordPOST = (Constants, { email }) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/recover`, {
    body: JSON.stringify({ email: email }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const signupPOST = (
  Constants,
  { signupEmail, signupFirstName, signupLastName, signupPassword }
) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/signup`, {
    body: JSON.stringify({
      firstName: signupFirstName,
      lastName: signupLastName,
      email: signupEmail,
      password: signupPassword,
      email_confirm: true,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const tagsGetAllTagsGET = Constants =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/tags?select=*`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useTagsGetAllTagsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Tags', args], () => tagsGetAllTagsGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchTagsGetAllTagsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useTagsGetAllTagsGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchTagsGetAllTags: refetch });
};

export const updateAPostPATCH = (
  Constants,
  {
    collabs,
    desc,
    externalURL,
    from_date,
    id,
    imagesArray,
    isPublic,
    title,
    to_date,
    type,
    userId,
  }
) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/portfolio_posts?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        title: title,
        description: desc,
        user_id: userId,
        from_date: from_date,
        to_date: to_date,
        external_url: externalURL,
        is_public: isPublic,
        Type: type,
        imagesArray: imagesArray,
        collaborators: collabs,
      }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'PATCH',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useUpdateAPostPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateAPostPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Posts', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Post');
        queryClient.invalidateQueries('Posts');
      },
    }
  );
};

export const updateProfileDataPATCH = (
  Constants,
  { city, learningContext, learningGoal, profilePicture, uuid, website }
) =>
  fetch(
    `https://qthvouonhshkvbaugrhc.supabase.co/rest/v1/profiles?"user_id"=eq.${
      uuid ?? ''
    }`,
    {
      body: JSON.stringify({
        city: city,
        personal_website: website,
        learning_context: learningContext,
        learning_goal: learningGoal,
        profile_picture: profilePicture,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header'],
      },
      method: 'PATCH',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useUpdateProfileDataPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateProfileDataPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('profile', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('profile');
        queryClient.invalidateQueries('profiles');
      },
    }
  );
};

export const logoutPOST = Constants =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/logout`, {
    body: JSON.stringify({ key: 'value' }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const recoverPUT = (Constants, { email, password }) =>
  fetch(`https://qthvouonhshkvbaugrhc.supabase.co/auth/v1/user`, {
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header'],
    },
    method: 'PUT',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});
