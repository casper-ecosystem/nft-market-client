import PropTypes from 'prop-types';
import { useField, useForm } from 'react-final-form';

import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import {
    StyledButtonsContainer,
    StyledFieldsWrapper,
    StyledPriceContainer
} from 'components/ItemsPage/ItemsFilter/FilterFormFields/styled';
import Divider from 'components/shared/Divider';
import NumericInput from 'components/shared/NumericInput';
import { StyledFormControlLabel } from 'components/shared/styled';

import { TICKERS } from 'constants/config';
import { parseNumberValue } from 'utils/helpers/form';

const FilterFormFields = ({ handleSubmit, handleClear }) => {
    const form = useForm();
    const priceRangeFromField = useField('priceRangeFrom', {
        type: 'number',
        allowNull: true,
        parse: parseNumberValue,
        defaultValue: ''
    });
    const priceRangeToField = useField('priceRangeTo', {
        type: 'number',
        allowNull: true,
        parse: parseNumberValue,
        defaultValue: ''
    });
    const byNowStatusField = useField('byNowStatus', { type: 'checkbox', defaultValue: false });
    const newStatusField = useField('newStatus', { type: 'checkbox', defaultValue: false });
    const liveAuctionStatusField = useField('liveAuctionStatus', {
        type: 'checkbox',
        defaultValue: false
    });
    const hasOffersStatusField = useField('hasOffersStatus', {
        type: 'checkbox',
        defaultValue: false
    });

    return (
        <div>
            <StyledFieldsWrapper>
                <Divider title="Status" position="left" />
                <StyledFormControlLabel
                    control={<Checkbox {...byNowStatusField.input} />}
                    label="Buy now"
                />
                <StyledFormControlLabel
                    control={<Checkbox {...newStatusField.input} />}
                    label="New"
                />
                <StyledFormControlLabel
                    control={<Checkbox {...liveAuctionStatusField.input} />}
                    label="Live auction"
                />
                <StyledFormControlLabel
                    control={<Checkbox {...hasOffersStatusField.input} />}
                    label="Has offers"
                />

                <Divider title={<Typography>Price</Typography>} position="left" />
                <StyledPriceContainer>
                    <NumericInput
                        {...priceRangeFromField.input}
                        label="from"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">{TICKERS.cspr}</InputAdornment>
                            )
                        }}
                    />
                    -
                    <NumericInput
                        {...priceRangeToField.input}
                        label="to"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">{TICKERS.cspr}</InputAdornment>
                            )
                        }}
                    />
                </StyledPriceContainer>
            </StyledFieldsWrapper>

            <StyledButtonsContainer>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Apply
                </Button>
                <Button color="primary" onClick={() => handleClear(form)}>
                    Clear
                </Button>
            </StyledButtonsContainer>
        </div>
    );
};

FilterFormFields.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired
};

export default FilterFormFields;