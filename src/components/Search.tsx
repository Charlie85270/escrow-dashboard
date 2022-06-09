<<<<<<< HEAD:src/components/Search.tsx
import * as React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> master:src/components/Search.jsx
import Web3 from 'web3';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

<<<<<<< HEAD:src/components/Search.tsx
interface ISearch {
  onSetEscrow: (value: string) => void;
}

const Search: React.FC<ISearch> = ({ onSetEscrow }): React.ReactElement => {
  const [escrow, setEscrow] = React.useState('');
=======
export default function Search({ onSetEscrow }) {
  const [escrow, setEscrow] = useState('');
>>>>>>> master:src/components/Search.jsx
  const isEscrowValid = Boolean(escrow) && Web3.utils.isAddress(escrow);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 3, flexGrow: 4 }}>
      <TextField
        variant="outlined"
        size="small"
        label="Escrow Factory Address"
        sx={{ flexBasis: '90%', mr: 1 }}
        onChange={(e) => setEscrow(e.target.value)}
      >
        {escrow}
      </TextField>
      <Button
        variant="outlined"
        onClick={() => onSetEscrow(escrow)}
        disabled={!isEscrowValid}
      >
        Search
      </Button>
    </Box>
  );
<<<<<<< HEAD:src/components/Search.tsx
};

export default Search;
=======
}
>>>>>>> master:src/components/Search.jsx
