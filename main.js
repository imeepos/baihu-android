"ui";

let androidx = Packages.androidx;
let ActionBarDrawerToggle = androidx.appcompat.app.ActionBarDrawerToggle;
let MaterialColors = com.google.android.material.color.MaterialColors;

$ui.useAndroidResources();

// 设置自定义主题
activity.theme.applyStyle($ui.R.style.MyAppTheme, true);
// 设置状态栏颜色为主题色
$ui.statusBarColor(MaterialColors.getColor(activity, android.R$attr.colorPrimary, 0));

// 对应文件 res/layout/activity_main.xml
$ui.layoutFile("activity_main");

$ui.toolbar.setTitle("欢迎使用白虎开发助手");

$ui.emitter.on("create_options_menu", (menu)=>{
    menu.add(`文档`)
    menu.add(`更新`)
})
$ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "文档":
            app.openUrl(`http://43.240.223.138:3001/`)
            break;
        case "更新":
            app.openUrl(`http://43.240.223.138:3001/白虎开发助手.apk`)
            break;
    }
    e.consumed = true;
})
activity.setSupportActionBar($ui.toolbar);

$ui.welcome_text.setText(`帮助你更好更快的完成开发`);

function onClickCopy(view) {
    if (view) {
        view.click(() => {
            setClip(view.text)
            toastLog(`复制成功`)
        })
    }
}

function onClickApi(view) {
    if (view) {
        view.click(() => {
            setClip(`http://43.240.223.138:3001/rpc/v1/${deviceId}/${view.text}`)
            toastLog(`复制成功`)
        })
    }
}

onClickCopy($ui.pc_url)

let deviceId = device.getAndroidId()
if (deviceId) {
    $ui.pc_url.setText(`http://43.240.223.138:3001/admin/tools/app?deviceId=${deviceId}`)
    $ui.device_id.setText(`${deviceId}`)
    onClickCopy($ui.device_id)
    $ui.base_url.setText(`http://43.240.223.138:3001/rpc/v1/${deviceId}/xxx`)
    onClickCopy($ui.base_url)
}


onClickApi($ui.api_version)
onClickApi($ui.api_exit)
onClickApi($ui.api_click)
onClickApi($ui.api_device_info)
onClickApi($ui.api_find_image)
onClickApi($ui.api_current_app_info)
onClickApi($ui.api_get_html)
onClickApi($ui.api_get_xml)
onClickApi($ui.api_get_page)
onClickApi($ui.api_go_page)
onClickApi($ui.api_run_code)
onClickApi($ui.api_run_script)
onClickApi($ui.api_take_screen)
onClickApi($ui.api_screen_clip)
onClickApi($ui.api_upload_script)
onClickApi($ui.api_upload_multi)
onClickApi($ui.api_run_element)
onClickApi($ui.api_task_all)
onClickApi($ui.api_stop)
onClickApi($ui.api_resume)
onClickApi($ui.api_destory)

engines.execScriptFile('back.js', {})
