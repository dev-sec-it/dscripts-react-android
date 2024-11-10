package com.devsecit.myapplication;

import android.content.Context;
import android.graphics.Color;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.widget.Toast;

public class WebJavaScriptInterface {
    private Context mContext;

    WebJavaScriptInterface(Context c) {
        mContext = c;
    }
    @JavascriptInterface
    public void setStatusBarColor(String color) {
        changeStatusBarColor(color);
    }

    // JavaScript function to change status bar foreground color (light/dark)
    @JavascriptInterface
    public void setStatusBarTextColor(String color) {
        changeStatusBarTextColor(color);
    }

    // Method to change the status bar background color
    private void changeStatusBarColor(String color) {
//        if (mContext instanceof android.app.Activity) {
            Window window = ((android.app.Activity) mContext).getWindow();
            window.setStatusBarColor(Color.parseColor(color));

//        }
    }

    // Method to change the status bar text color (light/dark icons)
    private void changeStatusBarTextColor(String color) {
        if (mContext instanceof android.app.Activity) {
            android.view.View decorView = ((android.app.Activity) mContext).getWindow().getDecorView();
            if ("light".equalsIgnoreCase(color)) {
                decorView.setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR); // Light icons
            } else {
                decorView.setSystemUiVisibility(0); // Dark icons
            }
        }
    }
}
