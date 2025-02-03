import {
  ToastDescription,
  ToastTitle,
  Toast,
  HStack,
} from "@gluestack-ui/themed";

type Props = {
  id: string;
  title: string;
  description?: string;
  action?: "error" | "success";
};

export function ToastMessage({
  id,
  title,
  description,
  action = "success",
}: Props) {
  return (
    <Toast
      nativeID={`toast-${id}`}
      action={action}
      bgColor={action === "success" ? "$green500" : "$red500"}
      mt="$10"
    >
      <HStack space="xs" w="$full">
        <ToastTitle color="$white" fontFamily="$heading">
          {title}
        </ToastTitle>
        {description && (
          <ToastDescription color="$white" fontFamily="$body">
            {description}
          </ToastDescription>
        )}
      </HStack>
    </Toast>
  );
}
