import { render } from '@testing-library/react';
import { Button } from '@/ui/components/common/Button/Button';

describe('Button', () => {
  it('renders HTML button element', () => {
    const result = render(
      <Button data-testid="btn">children</Button>
    );

    expect(result.getByTestId('btn')).toBeInTheDocument();
  });

  it('emits onClick', () => {
    const onClick = jest.fn();
    const result = render(
      <Button data-testid="btn" onClick={onClick}>children</Button>
    );
    const button = result.getByTestId('btn');
    button.click();

    expect(onClick).toHaveBeenCalled();
  });
})
