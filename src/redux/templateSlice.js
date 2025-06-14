import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default templateSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTemplates } from '../services/templateApi';

export const fetchTemplates = createAsyncThunk('templates/fetchTemplates', async () => {
  const response = await getTemplates();
  return response;
});

const templateSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTem